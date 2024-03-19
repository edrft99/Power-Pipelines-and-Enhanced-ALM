function onFormLoad(executionContext) {
  var formContext = executionContext.getFormContext();
  // Get the record ID
  var recordId = formContext.data.entity.getId();
  // Set the vars
  var tabinfo = formContext.ui.tabs.get("tab_tech");

  // Check if the record has been created
  if (recordId === null || recordId === "") {
    // If the record has not been created, hide the tabs
    hideOrShowTabsAndSections(false);
  } else {
    // If the record has been created, show all tabs
    hideOrShowTabsAndSections(true);
  }
  function hideOrShowTabsAndSections(isVisible) {
    tabinfo.setVisible(isVisible);
  }
}
