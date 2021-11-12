class ResizeTitle {
    static CLASS = {
        TITLI_NAME_MEDIA: 'title-name-media'
    }
    _childrenEl = null;
    _TextContent = 1;

    constructor(className) {
        this._mainContainer = ResizeTitle.getByClassName(className).children[this._TextContent];
        this.init();
        console.log(this._mainContainer)
    };

    static getByClassName(className) {
        return document.querySelector(`.${className}`);
    };

    init() {
        this.setClasses(this._mainContainer);
    };

    setChildren(element) {
        this._childrenEl = element.children;
    };

    setClasses(container) {
        this.setClass(container, ResizeTitle.CLASS.TITLI_NAME_MEDIA);
    };

    setClass(itemContainer, className) {
        itemContainer.classList.add(className);
    };
}