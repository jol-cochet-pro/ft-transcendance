import Navigator from "./navigator";

export default class React
{
    static navigator = new Navigator();

    static init() {
        window.addEventListener("popstate", () => {
            React.navigator.navigate(location.pathname, false);
        });

        window.addEventListener("DOMContentLoaded", () => {
            React.navigator.navigate(location.pathname);
        });
    }

    static navigate(path: string) {
        React.navigator.navigate(path);
    }

}