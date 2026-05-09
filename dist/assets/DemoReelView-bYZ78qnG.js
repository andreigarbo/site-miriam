import{o as e,s as t,u as n,y as r}from"./runtime-core.esm-bundler-JXx-FQuP.js";var i=[`src`],a={__name:`VimeoPlayer`,props:{videoId:{type:String,required:!0}},setup(n){let a=n;return(o,s)=>n.videoId?(r(),t(`iframe`,{key:0,width:`800`,height:`600`,title:`YouTube video player`,frameborder:`0`,src:`https://www.youtube.com/embed/${a.videoId}`,allow:`\r
      accelerometer;\r
      autoplay;\r
      clipboard-write;\r
      encrypted-media;\r
      gyroscope;\r
      picture-in-picture;\r
      web-share;\r
    `,referrerpolicy:`strict-origin-when-cross-origin`,allowfullscreen:``},null,8,i)):e(``,!0)}},o={class:`vimeo-player-wrapper`},s={__name:`DemoReelView`,setup(e){return(e,i)=>(r(),t(`div`,o,[n(a,{videoId:`-1Lchlw0GbI`})]))}};export{s as default};