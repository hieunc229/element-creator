const ElementScrollTo = {
    documentVerticalScrollPosition: function () {
        if (self.pageYOffset) return self.pageYOffset;
        if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop;
        if (document.body.scrollTop) return document.body.scrollTop;
        return 0;
    },
    viewportHeight: function () {
        return (document.compatMode === "CSS1Compat") ? document.documentElement.clientHeight : document.body.clientHeight;
    },
    documentHeight: function () {
        return (document.height !== undefined) ? document.height : document.body.offsetHeight;
    },
    documentMaximumScrollPosition: function () {
        return this.documentHeight() - this.viewportHeight();
    },
    elementVerticalClientPosition: function (element) {
        var rectangle = element.getBoundingClientRect();
        return rectangle.top;
    },
    scrollVerticalTickToPosition: function (currentPosition, targetPosition) {
        var filter = 0.2;
        var fps = 60;
        var difference = parseFloat(targetPosition) - parseFloat(currentPosition);
        var arrived = (Math.abs(difference) <= 0.5);
        if (arrived) {
            scrollTo(0.0, targetPosition);
            return;
        }
        currentPosition = (parseFloat(currentPosition) * (1.0 - filter)) + (parseFloat(targetPosition) * filter);
        scrollTo(0.0, Math.round(currentPosition));
        setTimeout("ElementScrollTo.scrollVerticalTickToPosition(" + currentPosition + ", " + targetPosition + ")", (1000 / fps));
    },
};
export default ElementScrollTo;