import{o as e,s as t,u as n,y as r}from"./runtime-core.esm-bundler-JXx-FQuP.js";var i=[`src`],a={__name:`VideoEmbedPlayer`,props:{videoId:{type:String,required:!0}},setup(n){let a=n;return(o,s)=>n.videoId?(r(),t(`iframe`,{key:0,title:`YouTube video player`,height:`100%`,width:`100%`,frameborder:`0`,src:`https://www.youtube.com/embed/${a.videoId}`,allow:`
      accelerometer;
      autoplay;
      clipboard-write;
      encrypted-media;
      gyroscope;
      picture-in-picture;
      web-share;
    `,referrerpolicy:`strict-origin-when-cross-origin`,allowfullscreen:``},null,8,i)):e(``,!0)}},o={class:`embed-player-wrapper`},s={__name:`DemoReelView`,setup(e){return(e,i)=>(r(),t(`div`,o,[n(a,{id:`embed-player`,videoId:`ii3heKtbfC8`})]))}};export{s as default};