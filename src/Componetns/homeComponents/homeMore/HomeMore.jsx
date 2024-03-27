import './more.css'
import notes from "../../../assets/img/notes.png";
import partner from "../../../assets/img/parner.png"
import HomeSwiper from "../homeSwiper/HomeSwiper.jsx";
import YellowButton from "../../yellowButton/YellowButton.jsx";
import {useState} from "react";
import "./feedbackInput.css"

function HomeMore(props) {
  const [data, setData] = useState({
    name: '',
    email: ''
  })
  return (
    <section className="more">
      <img className="more__notes" src={notes} alt=""/>
      <svg className="more__upper-deco" viewBox="0 0 1440 437" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_82_24" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="-1" width="1440"
              height="438">
          <rect y="-0.00012207" width="1440" height="437" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_82_24)">
          <path fillRule="evenodd" clipRule="evenodd"
                d="M1736.08 -553C1725.94 -475.026 1683.63 -295.835 1586.38 -144.699C1489.17 6.37317 1337.3 129.124 1107.85 95.2794C877.215 61.2588 724.077 62.4843 578.131 94.7426C438.472 125.611 305.489 184.886 117.63 268.621L117.63 268.621C109.28 272.343 100.821 276.113 92.249 279.931C-108.341 369.275 -317.439 308.915 -502.055 171.404C-686.673 33.892 -846.483 -180.57 -948.125 -398.587L-951.75 -396.897C-849.891 -178.414 -689.702 36.6238 -504.445 174.612C-319.186 312.601 -108.534 373.74 93.8765 283.585C102.376 279.799 110.763 276.061 119.043 272.37C307.111 188.544 439.742 129.427 578.994 98.6483C724.299 66.5316 876.91 65.2571 1107.27 99.2365C1338.83 133.392 1492.04 9.30933 1589.74 -142.535C1626.28 -199.315 1655.09 -260.019 1677.37 -317.866C1654.52 -255.981 1624.13 -190.064 1584.7 -128.782C1487.74 21.905 1336.54 143.989 1108.15 110.301C877.367 76.2596 723.965 77.4605 577.699 109.79C437.837 140.703 304.678 200.057 116.924 283.746C108.538 287.483 100.044 291.27 91.4349 295.104C-108.244 384.043 -316.565 324.072 -500.861 186.8C-685.159 49.5261 -844.779 -164.648 -946.312 -382.432L-953.563 -379.052C-950.634 -372.77 -947.657 -366.49 -944.633 -360.215L-956.282 -354.784C-951.898 -345.381 -947.406 -335.984 -942.809 -326.599L-958.001 -319.517C-855.708 -100.103 -694.759 116.088 -508.224 255.028C-321.681 393.974 -107.921 456.671 98.1312 364.893C106.339 361.237 114.44 357.626 122.439 354.061L122.858 353.874C311.352 269.861 443.281 211.059 581.721 180.46C725.744 148.627 877.3 147.254 1107.1 181.151C1342.88 215.929 1498.77 89.1818 1597.47 -64.2058C1695.97 -217.277 1738.69 -398.323 1748.98 -477.452L1739.76 -478.651C1742.02 -491.073 1743.75 -502.214 1745 -511.839L1738.64 -512.667C1740.02 -520.889 1741.15 -528.437 1742.03 -535.226L1737.62 -535.8C1738.57 -541.773 1739.38 -547.347 1740.05 -552.484L1736.08 -553ZM1620.73 -144.467C1612.3 -129.406 1603.38 -114.488 1593.95 -99.8291C1495.62 52.9797 1340.73 178.728 1106.54 144.183C876.529 110.255 724.577 111.591 580.073 143.531C441.329 174.197 309.137 233.117 120.804 317.06C112.614 320.71 104.318 324.408 95.9108 328.152C-108.776 419.322 -321.37 357.209 -507.431 218.622C-640.475 119.525 -760.534 -19.0333 -855.493 -170.044C-759.212 -10.8938 -634.664 135.911 -496.277 238.988C-312.944 375.543 -106.954 434.346 89.9938 346.623C98.71 342.741 107.31 338.907 115.8 335.123C303.245 251.57 436.932 191.98 577.404 160.931C724.631 128.39 878.825 127.262 1110.02 161.365C1335.25 194.587 1484.44 74.501 1580.65 -75.0282C1595.23 -97.6805 1608.56 -120.975 1620.73 -144.467ZM-499.068 207.394C-659.497 87.8995 -801.277 -90.1125 -902.149 -278.026C-801.353 -95.537 -662.497 76.381 -505.64 193.216C-320.06 331.444 -108.631 392.973 94.6898 302.412C102.881 298.763 110.967 295.159 118.953 291.6L119.167 291.505L119.691 291.271L119.746 291.246C307.92 207.373 440.376 148.335 579.426 117.601C724.41 85.5552 876.758 84.2562 1106.98 118.215C1339.59 152.526 1493.47 27.7773 1591.43 -124.453C1600.88 -139.138 1609.81 -154.084 1618.25 -169.174C1607.17 -148.286 1595.17 -127.592 1582.18 -107.405C1485.59 42.7031 1335.39 163.788 1108.58 130.333C877.596 96.261 723.798 97.4252 577.052 129.861C436.884 160.842 303.462 220.314 115.862 303.934C107.424 307.695 98.877 311.505 90.2145 315.364C-108.099 403.694 -315.255 344.307 -499.068 207.394Z"
                fill="url(#paint0_linear_82_24)"/>
        </g>
        <defs>
          <linearGradient id="paint0_linear_82_24" x1="812" y1="1872.5" x2="939.072" y2="-811.119"
                          gradientUnits="userSpaceOnUse">
            <stop offset="0.0671447" stopColor="#9E00FF"/>
            <stop offset="1" stopColor="#007AFF"/>
          </linearGradient>
        </defs>
      </svg>
      <svg className="more__background" viewBox="0 0 1440 1630" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M81 290.381C484 110.881 634.5 37.8806 1095.5 105.881C1250.67 128.769 1370.51 80.3191 1462 0V1794.38H-21V323.198C13.1309 316.266 47.1834 305.443 81 290.381Z"
          fill="url(#paint0_linear_68_10)"/>
        <defs>
          <linearGradient id="paint0_linear_68_10" x1="951" y1="2122.62" x2="1432.82" y2="-1032.81"
                          gradientUnits="userSpaceOnUse">
            <stop offset="0.0671447" stopColor="#9E00FF"/>
            <stop offset="1" stopColor="#007AFF"/>
          </linearGradient>
        </defs>
      </svg>
      <div className="more__upper container">
        <div className="swiper__container">
          <div className="more__title">Узнайте о нас больше</div>
          <HomeSwiper/>
        </div>
      </div>
      <div className="more__divider"></div>
      <div className="container more__bottom" style={{paddingTop: '60px'}}>
        <div className="more__info">
          <div className="more__bot-title">Остались вопросы?</div>
          <div className="more__bot-text">Все пожелания и комментарии просим отправлять, используя форму обратной связи.
          </div>
          <div className="more__img"><img src={partner} alt=""/></div>
        </div>
        <div className="more__form feedback">
          <input className='feedback__input' placeholder="Ваше имя" value={data.name} type="text" onChange={(e) => setData({...data, name: e.target.value})}/>
          <input className='feedback__input' placeholder="Ваша почта" value={data.email} type="email" onChange={(e) => setData({...data, email: e.target.value})}/>
          <textarea name="message" id="" className='feedback__message'></textarea>
          <YellowButton to={'/'} additionalClass={'feedback__button'}>Отправить</YellowButton>
          <div className="feedback__info">Нажимая на кнопку, вы даете согласие на обработку персональных данных и
            соглашаетесь c <a href='/privacy'>политикой конфиденциальности</a></div>
        </div>
      </div>
    </section>
  );
}

export default HomeMore;