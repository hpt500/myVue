import { createApp } from './app'

const isDev = process.env.NODE_ENV !== 'production'

export default context => {
    const s = isDev && Date.now()
    // 因为这边 router.onReady 是异步的，所以我们返回一个 Promise
    // 确保路由或组件准备就绪

    return new Promise((resolve, reject) => {
        const { app, router, store } = createApp(context)

        // 设置路由
        router.push(context.url)

        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents()
            if (!matchedComponents.length) {
            return reject({ code: 404 })
            }
    
            // 执行asyncData方法，预拉取数据
            Promise.all(matchedComponents.map(Component => {
                if (Component.asyncData) {
                    return Component.asyncData({
                        store: store,
                        route: router.currentRoute
                    })
                }
            })).then(() => {
                // 将store的快照挂到ssr上下文上
                context.state = store.state
                resolve(app)
            }).catch(reject)
        }, reject)
    })


}