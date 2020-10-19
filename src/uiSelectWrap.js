import $ from 'jquery';

uiSelectWrap.$inject = ['$document', 'uiGridEditConstants'];

function uiSelectWrap($document, uiGridEditConstants) {
  return {
    restrict: 'EA',
    link: link
  }

  function link($scope) {
    $document.on('click', docClick);

    function docClick(evt) {
      if ($(evt.target).closest('.ui-select-container').size() === 0) {
        $scope.$emit(uiGridEditConstants.events.END_CELL_EDIT);
        $document.off('click', docClick);
      }
    }
  };
}

export default uiSelectWrap;
