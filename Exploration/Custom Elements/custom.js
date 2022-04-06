class customElement extends HTMLElement
{
    constructor()
    {
        super();
        this.innerHTML="This is Displayed in a custom tag";
        
    }
}
customElements.define('my-tag',customElement);