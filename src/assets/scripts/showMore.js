// function resizeGridItem(item) {
//   grid = document.getElementsByClassName("image-grid")[0];
//   rowHeight = parseInt(
//     window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
//   );
//   rowGap = parseInt(
//     window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
//   );
//   rowSpan = Math.ceil(
//     (item.querySelector(".item").getBoundingClientRect().height + rowGap) /
//       (rowHeight + rowGap)
//   );
//   item.style.gridRowEnd = "span " + rowSpan;
// }
