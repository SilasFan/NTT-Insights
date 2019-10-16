import AV from 'leancloud-storage';

AV.init({
    appId: 'Qu1Q1tmQ3hq7FNlSYeNGuxWV-gzGzoHsz',
    appKey: 'ikUOVzJFKxrkad2WiTiMATHs',
    serverURLs: 'https://qu1q1tmq.lc-cn-n1-shared.com',
});

interface Insight {
    title: string;
    content: string;
}

export function getLoginFunc(username: string, passwd: string) {
    return AV.User.logIn(username, passwd);
}

export function getInsertFunc(insight: Insight) {
    const Object = AV.Object.extend('insight');
    const obj = new Object();
    obj.set('title', insight.title);
    obj.set('content', insight.content);
    return obj.save();
}

export function getQueryFunc() {
    const query = new AV.Query('insight');
    query.ascending('titile');
    query.select(['title', 'content', 'Stage']);
    return query.find();
}

export function getLogoutFunc() {
    return AV.User.logOut();
}

export function getToken() {
    return AV.User.current().getSessionToken();
}

export function getAuthenticatedFunc() {
    return AV.User.current().isAuthenticated();
}

export function getUserName() {
    return AV.User.current().getUsername();
}
