import { LitElement } from 'lit-element';

export class PageViewElement extends LitElement {
    // Only render this page if it's actually visible.
    _shouldRender(props) {
        return props.active;
    }

    static get properties() {
        return {
            active: Boolean
        };
    }
}
