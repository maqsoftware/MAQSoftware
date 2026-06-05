var oEventsContainer = $("#events-grid");
var activeFilters = {
  type: "all"
};
var EVENTS_BASE_QUERY = "maq software";
var EVENT_FILTER_LABELS = {
  "dashboard": "Dashboard in a Day",
  "app": "App in a Day",
  "sql-app": "SQL AI App in a Day",
  "chat": "Chat with Your Data in a Day",
  "power-pages": "Power Pages in a Day",
  "agent": "Agent in a Day",
  "fabric": "Fabric Analyst in a Day",
  "automation": "Automation in a Day",
  "copilot": "Copilot Studio in a Day"
};
var EVENT_FILTER_ORDER = ["dashboard", "app", "sql-app", "chat", "power-pages", "agent", "fabric", "automation", "copilot"];
var EVENTS_PAGE_SIZE = 6;
var eventsTotalCount = 0;
var eventsIsLoading = false;
var allFetchedEventCards = [];
var filteredEventCards = [];
var visibleEventCount = 0;
var eventsFetchInProgress = false;
var eventsCacheFullyLoaded = false;
var eventsFetchRequestId = 0;

var eventImageMap = [
  { key: "dashboard", img: "/images/events/dashboard.png" },
  { key: "sql ai app in a day", img: "/images/events/sql.png" },
  { key: "sql app in a day", img: "/images/events/sql.png" },
  { key: "app in a day", img: "/images/events/app.png" },
  { key: "chat with your data", img: "/images/events/chat.png" },
  { key: "chat with you data", img: "/images/events/chat.png" },
  { key: "copilot studio", img: "/images/events/copilot.png" },
  { key: "power pages", img: "/images/events/power.png" },
  { key: "power automate", img: "/images/events/automation.png" },
  { key: "agent in a day", img: "/images/events/agent.png" },
  { key: "agent", img: "/images/events/agent.png" },
  { key: "fabric", img: "/images/events/fabric.png" },
  { key: "copilot", img: "/images/events/copilot.png" },
  { key: "automation", img: "/images/events/automation.png" }
];
var defaultEventImage = "/images/events/dashboard.png";

function getEventImage(title) {
  var lowerTitle = title.toLowerCase();
  for (var i = 0; i < eventImageMap.length; i++) {
    if (lowerTitle.indexOf(eventImageMap[i].key) !== -1) {
      return eventImageMap[i].img;
    }
  }
  return defaultEventImage;
}

var IST_OFFSET_MS = 5.5 * 60 * 60 * 1000;

function toIST(date) {
  return new Date(date.getTime() + IST_OFFSET_MS);
}

function formatEventDate(dateString) {
  var ist = toIST(new Date(dateString));
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return months[ist.getUTCMonth()] + " " + ist.getUTCDate() + ", " + ist.getUTCFullYear();
}

function fmtTime(d) {
  var h = d.getUTCHours();
  var m = d.getUTCMinutes();
  var ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return h + ":" + (m < 10 ? "0" : "") + m + " " + ampm;
}

function formatISTTimeRange(startDateStr, endDateStr) {
  return fmtTime(toIST(new Date(startDateStr))) + " – " + fmtTime(toIST(new Date(endDateStr))) + " IST";
}

function getTimezoneId(timezoneLabel) {
  if (timezoneLabel === "IST") return "Asia/Kolkata";
  if (timezoneLabel === "GMT/BST") return "Europe/London";
  if (timezoneLabel === "CET/CEST") return "Europe/Stockholm";
  if (timezoneLabel === "US Time") return "America/New_York";
  return "";
}

function formatTimeInZone(dateString, timezoneId) {
  if (!timezoneId) return "";
  try {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: timezoneId
    }).format(new Date(dateString));
  } catch (e) {
    return "";
  }
}

function formatEventTime(startDateStr, endDateStr, parentTimezoneLabel) {
  var istRange = formatISTTimeRange(startDateStr, endDateStr);
  var parentTimezoneId = getTimezoneId(parentTimezoneLabel);

  if (!parentTimezoneId || parentTimezoneLabel === "IST") {
    return istRange;
  }

  var parentStart = formatTimeInZone(startDateStr, parentTimezoneId);
  var parentEnd = formatTimeInZone(endDateStr, parentTimezoneId);

  if (!parentStart || !parentEnd) {
    return istRange;
  }

  return parentStart + " – " + parentEnd + " " + parentTimezoneLabel + "<span class='ist-line'>" + istRange + "</span>";
}

function extractRegion(title) {
  var parts = title.split(" - ");
  return parts.length >= 3 ? parts[parts.length - 1].trim() : "";
}

function extractEventName(title) {
  var parts = title.split(" - ");
  return parts.length >= 1 ? parts[0].trim() : title;
}

function getEventType(eventName) {
  var n = eventName.toLowerCase();
  if (n.indexOf("dashboard") !== -1) return "dashboard";
  if (n.indexOf("sql") !== -1 && n.indexOf("app in a day") !== -1) return "sql-app";
  if (n.indexOf("app in a day") !== -1) return "app";
  if (n.indexOf("chat with your data") !== -1 || n.indexOf("chat with you data") !== -1) return "chat";
  if (n.indexOf("power pages") !== -1) return "power-pages";
  if (n.indexOf("agent") !== -1) return "agent";
  if (n.indexOf("fabric") !== -1) return "fabric";
  return "other";
}

function normalizeFormat(event) {
  return event.formatEnglishName || event.format || "Digital";
}

function getEventTimezone(region) {
  var regionName = (region || "").toLowerCase();
  if (regionName.indexOf("india") !== -1) return "IST";
  if (regionName.indexOf("ireland") !== -1 || regionName.indexOf("united kingdom") !== -1 || regionName.indexOf("uk") !== -1) return "GMT/BST";
  if (regionName.indexOf("norway") !== -1 || regionName.indexOf("sweden") !== -1) return "CET/CEST";
  if (regionName.indexOf("united states") !== -1 || regionName.indexOf("usa") !== -1) return "US Time";
  return "Digital";
}

function escapeHtml(str) {
  var div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function escapeAttribute(str) {
  return escapeHtml(String(str)).replace(/'/g, "&#39;").replace(/\"/g, "&quot;");
}

function toggleDescriptionExpand($btn) {
  var $desc = $btn.prev(".event-card-desc");
  var isExpanded = $desc.hasClass("expanded");
  $desc.toggleClass("expanded");
  $btn.text(isExpanded ? "Read More" : "Read Less");
}

function updateDescriptionButtons() {
  oEventsContainer.find(".event-card-desc").each(function () {
    var $description = $(this);
    var $btn = $description.next(".event-desc-more");
    var isOverflowing = this.scrollHeight > this.clientHeight + 1;
    var isExpanded = $description.hasClass("expanded");
    $btn.toggleClass("is-visible", isExpanded || isOverflowing);
  });
}

function buildCardHtml(card) {
  var event = card.content;
  var title = event.title || event.name || "Untitled Event";
  var description = event.description || "";
  var href = (event.action && event.action.href) ? event.action.href : "#";
  var format = normalizeFormat(event);
  var region = extractRegion(title);
  var eventName = extractEventName(title);
  var imageUrl = getEventImage(title);
  var timezone = getEventTimezone(region);
  var startDate = event.eventDates ? formatEventDate(event.eventDates.startDate) : "";
  var timeRange = event.eventDates ? formatEventTime(event.eventDates.startDate, event.eventDates.endDate, timezone) : "";
  var eventType = getEventType(eventName);
  var locationLabel = region ? region + " (" + format + ")" : format;

  return "<div class='grid-item nf-item' data-event-type='" + escapeAttribute(eventType) + "'>" +
    "<article class='post'>" +
    "<div class='post-content with-background event-card'>" +
    "<div class='post-media'>" +
    "<a href='" + escapeAttribute(href) + "' target='_blank' rel='noopener noreferrer'>" +
    "<img class='cs-image' src='" + escapeAttribute(imageUrl) + "' alt='" + escapeAttribute(eventName) + "' />" +
    "</a>" +
    "</div>" +
    "<div class='event-card-body'>" +
    "<h2 class='post-title post-noDesc-title'>" +
    "<a href='" + escapeAttribute(href) + "' target='_blank' rel='noopener noreferrer'>" + escapeHtml(eventName) + "</a>" +
    "</h2>" +
    (description ? "<p class='event-card-desc'>" + escapeHtml(description) + "</p>" +
      "<button type='button' class='event-desc-more'>Read More</button>" : "") +
    "<div class='event-card-meta'>" +
    "<p class='event-card-date'><i class='fa-regular fa-calendar'></i>" + startDate + "</p>" +
    "<p class='event-card-time'><i class='fa-regular fa-clock'></i>" + timeRange + "</p>" +
    "<p class='event-card-timezone'><i class='fa-solid fa-globe'></i>" + escapeHtml(timezone) + "</p>" +
    "<p class='event-card-location'><i class='fa-solid fa-location-dot'></i>" + escapeHtml(locationLabel) + "</p>" +
    "</div>" +
    "<a href='" + escapeAttribute(href) + "' target='_blank' rel='noopener noreferrer' class='read-more'>Register Now<span class='chevron'>&gt;</span></a>" +
    "</div>" +
    "</div>" +
    "</article>" +
    "</div>";
}

function buildDynamicFilters(cards) {
  var typesInData = {};
  for (var i = 0; i < cards.length; i++) {
    var event = cards[i].content || {};
    var title = event.title || event.name || "";
    var eventType = getEventType(extractEventName(title));
    if (eventType !== "other") {
      typesInData[eventType] = true;
    }
  }

  var filters = [{ id: "all", label: "All" }];
  for (var j = 0; j < EVENT_FILTER_ORDER.length; j++) {
    var id = EVENT_FILTER_ORDER[j];
    if (typesInData[id] && EVENT_FILTER_LABELS[id]) {
      filters.push({ id: id, label: EVENT_FILTER_LABELS[id] });
    }
  }
  return filters;
}

function renderFilters(filterList) {
  var $bar = $("#events-filter-bar");
  var groupHtml = "<div class='events-filter-group' data-filter-group='type'>" +
    "<span class='events-filter-label'>Event</span>" +
    "<ul class='container-filter categories-filter events-filter-list' role='tablist' aria-label='Filter by Event'>";

  for (var i = 0; i < filterList.length; i++) {
    var option = filterList[i];
    groupHtml += "<li role='presentation'><a class='categories cursor-pointer events-filter-option" + (option.id === activeFilters.type ? " active" : "") + "' data-filter-key='type' data-filter-value='" + escapeAttribute(option.id) + "' role='tab' aria-selected='" + (option.id === activeFilters.type ? "true" : "false") + "' tabindex='0'>" + escapeHtml(option.label) + "</a></li>";
  }

  groupHtml += "</ul></div>";
  $bar.html(groupHtml);

  $bar.show();
  $bar.off("click", ".events-filter-option");

  $bar.on("click", ".events-filter-option", function (event) {
    event.preventDefault();
    var $option = $(this);
    var key = $option.attr("data-filter-key");
    var value = $option.attr("data-filter-value");
    if (activeFilters[key] === value) {
      return;
    }
    activeFilters[key] = value;
    $option.closest(".events-filter-list").find(".events-filter-option").removeClass("active").attr("aria-selected", "false");
    $option.addClass("active").attr("aria-selected", "true");
    applyCurrentFilterAndRender();
  });
}

function bindEventCardInteractions() {
  $(window).off("resize.eventsDescriptionButtons");
  $(window).on("resize.eventsDescriptionButtons", updateDescriptionButtons);

  oEventsContainer.off("click", ".event-desc-more");
  oEventsContainer.on("click", ".event-desc-more", function () {
    toggleDescriptionExpand($(this));
  });
}

function updatePaginationControls() {
  var $loadMore = $("#events-load-more");
  var $status = $("#events-pagination-status");
  var shownCount = visibleEventCount;
  var totalCount = filteredEventCards.length;
  var hasMore = shownCount < totalCount || eventsFetchInProgress;

  if (totalCount > 0) {
    var eventWord = totalCount === 1 ? "event" : "events";
    $status.text("Showing " + shownCount + " of " + totalCount + " " + eventWord + (eventsFetchInProgress ? " (updating...)" : ""));
  } else {
    $status.text(eventsFetchInProgress ? "Loading events..." : "");
  }

  if (hasMore) {
    $loadMore.css("display", "block");
  } else {
    $loadMore.hide();
  }

  $loadMore.prop("disabled", eventsIsLoading).text(eventsIsLoading ? "Loading..." : "Load more");
}

function recomputeFilteredCards() {
  filteredEventCards = filterCardsForActiveType(allFetchedEventCards);
  eventsTotalCount = filteredEventCards.length;
}

function applyCurrentFilterAndRender() {
  oEventsContainer.empty();
  visibleEventCount = 0;
  recomputeFilteredCards();

  if (filteredEventCards.length === 0) {
    if (eventsCacheFullyLoaded) {
      renderEventCards([]);
    } else {
      renderSkeletonCards();
      $("#events-no-results").hide();
    }
    updatePaginationControls();
    return;
  }

  $("#events-no-results").hide();
  renderNextFilteredPage();
}

function appendEventCards(cards) {
  if (!cards || cards.length === 0) {
    return;
  }

  for (var i = 0; i < cards.length; i++) {
    oEventsContainer.append(buildCardHtml(cards[i]));
  }

  $("#events-no-results").hide();
  updateDescriptionButtons();
  setTimeout(updateDescriptionButtons, 250);
  bindEventCardInteractions();
}

function filterCardsForActiveType(cards) {
  if (activeFilters.type === "all") {
    return cards.slice();
  }

  var filterType = activeFilters.type;
  return cards.filter(function (card) {
    var event = card.content || {};
    var title = event.title || event.name || "";
    var eventType = getEventType(extractEventName(title));
    return eventType === filterType;
  });
}

function renderNextFilteredPage() {
  if (visibleEventCount >= filteredEventCards.length) {
    updatePaginationControls();
    return;
  }

  var nextCards = filteredEventCards.slice(visibleEventCount, visibleEventCount + EVENTS_PAGE_SIZE);
  appendEventCards(nextCards);
  visibleEventCount += nextCards.length;
  updatePaginationControls();
}

function renderEventCards(cards) {
  oEventsContainer.empty();

  if (!cards || cards.length === 0) {
    $("#events-no-results").show();
    oEventsContainer.append(
      "<div class='column width-12 center'>" +
      "<p class='lead'>No upcoming events found. Check back soon.</p>" +
      "</div>"
    );
    return;
  }

  $("#events-no-results").hide();

  for (var i = 0; i < cards.length; i++) {
    oEventsContainer.append(buildCardHtml(cards[i]));
  }

  updateDescriptionButtons();
  setTimeout(updateDescriptionButtons, 250);
  bindEventCardInteractions();
}

function renderSkeletonCards() {
  var html = "";
  for (var i = 0; i < EVENTS_PAGE_SIZE; i++) {
    html +=
      "<div class='grid-item nf-item'>" +
      "<article class='post'>" +
      "<div class='post-content with-background event-card'>" +
      "<div class='post-media'><div class='sk-block sk-img'></div></div>" +
      "<div class='event-card-body'>" +
      "<div class='sk-block sk-title'></div>" +
      "<div class='sk-block sk-line'></div>" +
      "<div class='sk-block sk-line sk-short'></div>" +
      "<div class='event-card-meta'>" +
      "<div class='sk-block sk-line sk-short'></div>" +
      "<div class='sk-block sk-line sk-short'></div>" +
      "<div class='sk-block sk-line sk-short'></div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</article>" +
      "</div>";
  }
  oEventsContainer.html(html);
}

function loadEvents() {
  eventsTotalCount = 0;
  visibleEventCount = 0;
  $("#events-no-results").hide();
  $("#events-loading").hide();
  $(".filter-bar").empty().hide();
  $("#events-load-more").off("click.eventsPagination").on("click.eventsPagination", function () {
    renderNextFilteredPage();
  });

  if (allFetchedEventCards.length > 0) {
    renderFilters(buildDynamicFilters(allFetchedEventCards));
    applyCurrentFilterAndRender();
    return;
  }

  renderSkeletonCards();
  updatePaginationControls();

  startBackgroundFetchAllEvents();
}

function startBackgroundFetchAllEvents() {
  if (eventsFetchInProgress) {
    return;
  }

  eventsFetchRequestId += 1;
  eventsFetchInProgress = true;
  eventsCacheFullyLoaded = false;
  allFetchedEventCards = [];
  filteredEventCards = [];
  visibleEventCount = 0;
  fetchAllEventsFromMicrosoftPage(0, eventsFetchRequestId);
}

function fetchAllEventsFromMicrosoftPage(skip, requestId) {
  eventsIsLoading = true;
  updatePaginationControls();

  $.ajax({
    url: "https://www.microsoft.com/msonecloudapi/events/cards",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({
      locale: "en-ww",
      top: 50,
      skip: skip,
      filters: "primary-language:english",
      query: EVENTS_BASE_QUERY,
      scenario: "Events"
    }),
    success: function (response) {
      if (requestId !== eventsFetchRequestId) {
        return;
      }

      var data = typeof response === "string" ? JSON.parse(response) : response;
      var cards = data && data.cards ? data.cards : [];

      if (cards.length > 0) {
        allFetchedEventCards = allFetchedEventCards.concat(cards);
        renderFilters(buildDynamicFilters(allFetchedEventCards));
        recomputeFilteredCards();

        if (visibleEventCount === 0) {
          oEventsContainer.empty();
          if (filteredEventCards.length > 0) {
            renderNextFilteredPage();
          }
        } else {
          updatePaginationControls();
        }
      }

      var hasMorePages = !!(data && data.hasMorePages && cards.length > 0);
      if (hasMorePages) {
        fetchAllEventsFromMicrosoftPage(skip + cards.length, requestId);
      } else {
        eventsFetchInProgress = false;
        eventsCacheFullyLoaded = true;
        renderFilters(buildDynamicFilters(allFetchedEventCards));
        recomputeFilteredCards();

        if (visibleEventCount === 0) {
          if (filteredEventCards.length === 0) {
            renderEventCards([]);
          } else {
            oEventsContainer.empty();
            renderNextFilteredPage();
          }
        }

        updatePaginationControls();
      }
    },
    error: function () {
      if (requestId !== eventsFetchRequestId) {
        return;
      }
      eventsFetchInProgress = false;
      eventsCacheFullyLoaded = true;
      oEventsContainer.empty();
      oEventsContainer.append(
        "<div class='column width-12 center'>" +
        "<p class='lead'>Unable to load events at this time.</p>" +
        "<p>View our upcoming events on the " +
        "<a href='https://www.microsoft.com/en-us/events/search-catalog?filters=primary-language%3Aenglish&q=maq+software&scenario=events' target='_blank' rel='noopener noreferrer'>Microsoft Events Catalog</a>." +
        "</p>" +
        "</div>"
      );
    },
    complete: function () {
      eventsIsLoading = false;
      updatePaginationControls();
      if (typeof loadPlugins === "function") {
        loadPlugins();
      }
    }
  });
}