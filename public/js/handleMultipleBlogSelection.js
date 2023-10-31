let checkAllBlogs = $("#checkAll");
let blogItemCheckbox = $('input[name="blogIds[]"]');
let actionHandleButton = $("#handleMultipleBlogs");
let actionOption = $("#select-action");

//Checked select All blog
checkAllBlogs.change(function () {
  blogItemCheckbox.prop("checked", $(this).prop("checked"));
  allowHandleBlogButton();
});

//Blog Item checkbox changed
blogItemCheckbox.change(function () {
  let isCheckAll =
    blogItemCheckbox.length === $('input[name="blogIds[]"]:checked').length;
  $("#checkAll").prop("checked", isCheckAll);
  allowHandleBlogButton();
});

//Select action changed
actionOption.change(function () {
  allowHandleBlogButton();
});

//Allow delete blogItemCheckbox item
function allowHandleBlogButton() {
  let optionActionValue = actionOption.val();
  let isAllowHandleAction =
    $('input[name="blogIds[]"]:checked').length > 0 &&
    optionActionValue !== "empty";
  actionHandleButton.prop("disabled", !isAllowHandleAction);
}
