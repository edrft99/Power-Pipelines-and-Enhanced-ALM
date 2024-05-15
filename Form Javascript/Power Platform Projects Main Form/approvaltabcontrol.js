function showSectionBasedOnChoice(executionContext) {
    let formContext = executionContext.getFormContext();
  
    // Get the attribute
    let approvalChoice = formContext.getAttribute("andy_teamleadapprovalchoice");
    if (!approvalChoice) {
      console.error("andy_teamleadapprovalchoice attribute not found.");
      return;
    }
  
    // Get the section
    let tab = formContext.ui.tabs.get("tab_approvals");
    let section = tab && tab.sections.get("tab_approvals_section_branchchief");
    if (!section) {
      console.error("tab_approvals_section_branchchief section not found.");
      return;
    }
  
    // Check if the choice equals 435700001
    section.setVisible(approvalChoice.getValue() === 435700001);
  }