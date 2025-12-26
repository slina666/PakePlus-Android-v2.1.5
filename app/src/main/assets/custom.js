window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector('head base[target="_blank"]')
    console.log('origin', origin, isBaseTargetBlank)
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        console.log('handle origin', origin)
        location.href = origin.href
    } else {
        console.log('not handle origin', origin)
    }
}

window.open = function (url, target, features) {
    console.log('open', url, target, features)
    location.href = url
}

document.addEventListener('click', hookClick, { capture: true })

// 新增：页面加载/跳转后强制横屏 + 退出恢复竖屏
// 页面加载完成触发横屏
window.onload = function() {
    // #ifdef APP-PLUS
    plus.screen.lockOrientation('landscape-primary');
    console.log('页面已强制横屏');
    // #endif
}

// 页面卸载时恢复竖屏（避免其他页面也横屏）
window.onunload = function() {
    // #ifdef APP-PLUS
    plus.screen.lockOrientation('portrait-primary');
    console.log('页面已恢复竖屏');
    // #endif
}

// 监听页面路由变化（如果是单页应用，跳转后重新触发横屏）
window.addEventListener('popstate', function() {
    // #ifdef APP-PLUS
    plus.screen.lockOrientation('landscape-primary');
    // #endif
})
