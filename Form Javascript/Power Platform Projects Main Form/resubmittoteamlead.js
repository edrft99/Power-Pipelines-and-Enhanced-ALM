function onChange(context) {
  let attribute = context.getEventSource();
  let value = attribute.getValue();
  let formContext = context.getFormContext();

  // Get the team lead approval choice attribute
  let approvalChoice = formContext.getAttribute("andy_teamleadapprovalchoice");

  if (value != null) {
    Xrm.Navigation.openAlertDialog({ text: "Request has been submitted!" });
    // Set the value of the team lead approval button to Resubmit
    attribute.setValue("Resubmit");
  }

  // Check if the approvalChoice attribute exists and set its value to Pending
  if (approvalChoice != null) {
    approvalChoice.setValue(435700000);
    // Save the form to ensure changes are applied
    formContext.data.entity.save();
  } else {
    console.error("andy_teamleadapprovalchoice attribute not found.");
  }
}