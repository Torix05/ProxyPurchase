import {
    LitElement,
    html,
    css
} from 'lit-element';

export class NewNestedItem extends LitElement {
    static get properties() {
        return {
            // id: { type: Number },
            // title: { type: String },
            Goods: {type: Array},
        };
    }

    static get styles() {
        return [css `
        .title {
            font-weight: bold;
        }
        
        .nested {
            margin-left: 50px;
        }
    `];
    }

    // render() {
    //     return html `
    //   <div .id=${this.id} class="nested">
    //     <span class="title">${this.title}</span>
    //     <input id="input-title" type="text" .value="${this.title}"/>
    //     <button @click="${this.handleClick}">변경</button>
    //   </div>
    // `;
    // }

    render() {

        return html `
      <section>
        ${goods.length > 0
        ? goods.map(
            item => html`
                <span class="requester">${this.item.product}</span>
                <span class="requester">${this.item.price}</span>
              `
        )
        : html`
              <div>No Content</div>
            `}
      </section>
    `;
    }

    handleClick() {
        this.title = this.shadowRoot.getElementById('input-title').value;
        this.requestUpdate();

        let event = new CustomEvent('modified', {
            detail: {
                title: this.shadowRoot.getElementById('input-title').value
            }
        });
        this.dispatchEvent(event);
    }
}