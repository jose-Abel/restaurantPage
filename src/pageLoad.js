const pageLoad = (htmlElement, args) => {
    document.addEventListener("DOMContentLoaded", () => {
        for (let i = 0; i < args.length; i++) {
            htmlElement.appendChild(args[i]);
        }
    })
}

export default pageLoad;