import { Carousel } from 'react-carousel-minimal';
import './Carrusel.css'
function Carrusel({id}) {
 const data = [
    {
      image: "https://lh3.googleusercontent.com/2Rfsgtcz2iCzBN7zyXOlDOAx_y41t3rvjpcgQMrT5cxMeWoCwNybWICCKEdVR1oMI7hJKe5RXWMHqzvTpkmO9LYO6jkUN048rNl8QTbacItEW4H8t3OpjhcJ01nlMUXMz8KRYqj8FTxJQ-0Mnk0kpPN_cBVrwGc1u_1aBnevlklg_dm0oomQvmmAOhp7Gudd2PLrD9m0euK0b4ntuoY7a90T5BKaSpSo0SoG_WnmXAYVuphFX5PSBHwCEtsatj5FshUEdAkUG_FCFHYPH3UFHSFX7PcjXzDdz4-UpV6WqX3nRug64efMfh-lzPT6gWQi8z_qRWMapCsv6J4R7eaHzrlEZsbvqFGHy0HRRXIqHhXeRAFRuxye-uvNujEzgjUsFdc1QxRyW34gP5T8BMjbTQLzCILtelGTnM6-z_exMADyXhGGwwG09rM1k34YHJZ2d-lfejnwqLFtG189nZNGnOTYDsoF-yCvhB1zu7uzZ-Hmhxy6YDALVCijP4rOwfAMw22597ia1G2blb-e9anG_Om0Zd0mgZ121tuLL55p5ObFel9gNpbUlpAj--YqfEiOxlxY3THBqX5IN6qDjmAO1W2fkbqsUwFdgt5rgO3ZtPdzuu5dsVm2hC5YsXAwNYUJkb6hXeIJyYPSonRST4Jxaxde86mhiX5dUAqaWE6o88LjwxEM6QxzyURkse9bsG9GMZEBWaJy1TIAnG1FQBhgYEWoJII3gI-OmAPznrxHQ9VmxltG2G8i0BkB3w4oDJUQZOEdqExUAlquz1Rdi7AD40L0Bif89QKVvZdaxF7WKOdVjIPdiT7ZbN-_Tyd5R0-LyIH-r0OBdpOBNOkkSsCh2Z7Mn8fphm2gjzIJrnFPdn90Sc3M4IeIDcp5X6FAXdosqzQzLoYxkBSgYHEx2b9YOzGJTXCO6Ta6MZ1iN-OxOC9ELGFJ__AJ61ZBNq4E0UZluwCmHnevhvbHoh8p5VYhx7RxpAL1viXFQAeEZqlbd73OhjQuKSFr_VC5EchPhtW-aONCXk6z5ibINRFFQX4ElfvFORY4mbwKlstf_3hac4GxNxN9u2fvAF7N4WRqMbHxfQDOhp_7m9mDqSDDSPHdqD0PEhLirj0owMtalsXdvW_x0ekdgkdktkuIMnfVYa7N7hY905Np7tTc84nIea3P826YpakOWf2jFRMLxjA=w1006-h477-s-no?authuser=0",
      caption: "Darjeeling"
    },
    {
      image: "https://lh3.googleusercontent.com/4ph54r0QHJdA2rjC-u6jSkhlXiXHxoqsAMAzpOh08_0hp5zkPIyuEK3RWoA_1Cx5gJMcWuJgXJla_HTGN1SysX64TU-jluB--2yc5A2gjo-hKseFksD4KM6zFBYmKN82rrAVmk4pQ9VzxZAR61nSEE9db2QiUJkkDcce6RNf2SI_KwCmf0ockNFn_pif2fYGFilI3Zs-1ivCpWiAsy0vOPjqahF4b1Mk__M6B0_SvuADoWWmCQWVlj1CybzYKdhlxMSHxIv4yPQzFpEXn4SDYLqXhVdNu3sFUoNnerJL5-N4MtIFquYMCCNeFXrjdumNIKetRSrducR5Q8uYsNRQvco-xGij1q8GSNCt5SYd3TxhfL0vAg8rHwyZ2pLF-ap-UvKVzInLzj6hQggP-XFbgir7SIieuoo32QTFPZqMDtPbrjGwj-5PvQCzF3aP3BxzVeD4Nlu1eos2ArF-ZmkGLamAqmvUeOAlEeJWUMBBEIcpsOt89scGr0oRAzXX67n4vtA0ZybQqtgoqVJgx7-Bypw9eA_mdYRExux9vxczqWSwUBq-a0lg1nAREt_ZUYQuIOYuEpY3SUgDrN3nP3MHuwx1m69wEjEIYHSL51iCkZfRler4NtmiqPSNv0SF3fRSsJ3QaSHahJcl8OLemfvsL_EmBJNQ35_5TiZ4deOvaKGlKijYBhi96ybvPi6EuM_5hx8RY65dghMM7uMBscVkVN1AAPtsxWsMb-JXSa4WzYgAQn9x4HIXDtrXjs4zsUEpLorho5hpBkZtHxdaxxtd1su--i0nr1kLLQn9KcWHWOKRdGTLVKhCZGtqTwNcb_VhGI9KQtlxymUHjRJGnL96euCBBnOJV20ZQIap1DfVuklAHt1qvvHOFa6KcXv6B61AUFEC74m_0qCEcpRFUccCafUpWtRnCKNsaWRJlL-9nA2vt-RWyIAo9d0tnUMs-OY3LjPDmFsrPSWMjR0DjPGQ9EluheUnew20XsPoYany9eRgaEBu9Rt_CneBK-KFXFmDTNhAKystHy9RzYA_ozYFiDP7DgXzP2obzl_TFkwnT1HMuive26p_K66lEry-ZC9L_seUDYhSQpW7a0YKswQYnNCQp3foGdPUDD3lp8AEeWHDiID4PUSBhZXgxD-OHoqpVtE6AdLuN9wwOkQsQP_x62tB3MPaPHgMkK4sYH4=w1006-h477-s-no?authuser=0",
      caption: "San Francisco"
    },
    {
      image: "https://lh3.googleusercontent.com/uiMs0VD-SiA3KjweZVl3LzpshV4rW6tLuaZDnABjhc7n30tK4M_q5s0FJAahP48TDqmvYyXfFFMKTLPC1cDXfZSr8MLdkcNe3CHnnByZNIDGykpOAFnbFxKfhClb2xU--8TVTexUeln61d_3cvjkaHYOQGdesMIQr64cyM9jL5AQ_HLmvaYNsOHmdVrGB_zG0C2GNB27JwP1rIWZrmWVaIwoDpJ-tJG7ced58JDHHhOBPNgWBcLPQeGtLEQsk6hItbcAP-ELf1FTC65ZeDC1tlgfgsNbzMrwFXOlN1l82vee2dNk5_kLNi544LNUHAha2l0_4h1fMhya5ePPndKsvxvwFWiavzQddf5aVdPs-3WyKXmOSK-fNVP1wvbeOK4U31TfoRl1SDGYipgE9p4fzi2d12d9sbid4_lRzlYg-IcI07uDAyl7dEKpaHycGjGdQay_33xPQ6MbbAU-UPO8GTLJenP2oDkAn9D4fEWz-ySbmtmE3gPfIQSIlyg3nUWJe1jIdP1SLWIhnmh5-6IjyFLltFaA_1BOAqIYPRxERr5R8SHEme0gLgqBWlFP-Apm1Hc4MLAAPiTqHQP_Qxrk2DL5G8V4_F3uMAgFWo9a9zmV77YyViKST6n2vVJxfJSpZFTy0nFiE4O0KyQIPkSSWO6fxDhyXgOwqfqbwJhnsh829RQ_tKrRVORLC9Y8ijwb_EsTRNgAqvx7E2LApTrkxQsRd8jgj4IosER4ugHygv1VQLGmd5du4dfhjVtqGPUXN5H9o-GGCC0oGzqgCUclmgepiEqPvAsUIQ586ZE7qiJempYZwW22sBAwm1JDjzax03aPJqqZlmA3ld1hjeAfsG15IHFS3rqcHMWWwMn6O6yni42qLOMxYobp_sEuapxcGaLeJBDvQlj31wnAxDOPlTbbWg6JGPisFVLR6R-tsHn0F-8LXLjevGF6UKw1354kKyh8kg8c_VPGq6rUcih954B128UP4PxFHSY60tMpi2W0vBMx-vpRGkYYcrELU7D2I7RGNUdm2AbIPUgr2L5QNSMi4neIAopNsUpKpgKvwv1777yXoYwBzI24W6E8VrNfqOIc0s53ETE9ZlIkq2AFlTnHAF-lAGoWDRZJLaAsoP8YynCDYC9v6TWI9jceBU_FHj2jSHbcKpmO-4rXHhu8O5_7FYM4hrnIJenaUwE=w1006-h477-s-no?authuser=0",
      caption: "Scotland"
    },
    {
      image: "https://lh3.googleusercontent.com/DEUn9mlvvqPaU-Qc_X5vZd58nRT-ikCIoe7go4rWjtFV5etiL54twb6Tr7GaOy8PpMVo_ykoinCcLkhaiFrXJLjGdkCfLJmwYP9JowqlESBpHK6Q4-lasePTV5UaStavthnrGWPS7t3aGo4U5PzSdw5YGRuxG-7dLJmgW3r9Y0Bed_T0CnRpNpVQ_HFfv-x_6hAApRFSSfislTUIyuH7jnHVQvv4xWVFWou0IcqsBabU2jyVCuzNPFwaThO_VeF2EXWmRMpUg06tZa9vT0spXwOz-6Ss-E4YIf0877Eq82Pxfy_QepTMN2UElTje5N5qlJ2kAqIEVuDqDZy_SzeE_BGANIkteXLkYEb4D3qbdqmD3djTYukYZFLnpBpc7wIyfu4rpfPc0cR6QWjmxbKkeHbKt81vQC-TaMDvBjoj3_wasFmMxJUQsHtpWAIeCwX9oGQaH-a1OTHG-qsqjqBFhA1jXrfspuWbHwArsDgyDvctKWzmdv2MbTsWFo8QGP65Ra_WnNWoTq3GFlwxEb_tPEEdWBzW74_QJOfS8UvU4vaINcIet6s5FF80CeaelyHWvBFYFeGdE_Lpd-3Irb1dUPFhashBQgZo0qRwpTxQF3gGOGNNqW_Pb0JqX02W8D3k-EkKLRsydy1Mv6QAcmdSQiMO5P_3dxld7R64rzbn-7LN3zjkdKhiRPm79rpGuAXe-52o7T3X93ATq-z2UbKUGn1dqRBw8CneMctVmtvfneUqDkM6LuWoSysFDh7cPg9mlWbrkqGC0MckD-uX9J0jz06N41lqXs1wdAvzFvu8y88p8m6n5uiRyKDl4zRPiWF1hDK9qHANsayFF_5k1hTpjTyJqTo5ror7tKI0HiazdytVwMYqctvPz7oLZx5-OE_7_GJKj4ExeAT92rWYXwQa4_H9nkpswwcaj4p0R-Yrim6iZ1g3XK48DcXxD6nIpuYPy3nCrkKXLByDhDu9DFitA73ckeqySx8gitzqEkFNE8bOtEXSY5RrUvS3GkM4RLvihMwGJZzp9KlDfRqoTRdR42EPJP6oJ7TmaJXiRwxHPKHkgkRcZNv5qv_bEGxgu7ZTN9UNEiw3rKkxflh1qj0amXq-tyOvpFgKMHw9cbS0WmUVTn_LjnOK-wrFjxo-QA4tr8qsVXFd4pZDQZm0vKMSK9BGZy3mOd7td_kltnI=w1006-h477-s-no?authuser=0",
      caption: "Darjeeling"
    },
    {
      image: "https://lh3.googleusercontent.com/w1nf9rCLV4MmAnGNv2vV7N4KEbM1Kgo6lcg5uNbE4nK8udhHze2u5btk5Bx_WSTu0EpJ8ntJy5eCKilzrUnZHb-wkcJ_LCkxpjcuulIp-WPDIlFhdD4KMPkafDOv4IuV_Xd-1KmK84-O5n78Zm_e6gLL3JJ2K7IcSUr9DTNi2hvUkCEw1aKcgYTvM8av4y7DS9ntcyEOvloJXqNQZ7slrYutAO9v9B5GVSF5QRwXXpQgEUC5NjS5V-sdhHQvxnYq_3bVnn9iHdU1FtxOPXQpbVXu6GnxVLAnZ-JGolMiDVA403eONTaJekLnx6j_jwS8ibOgob7vGrsO612y-K5-_qUaNrOZvgG6y1z_l_WBACKo-meWpCiapQlD4b-PpJ7R_zzLRDWonBgsh41fppx3rY6HlbuDfAHw88QMGCADfolqSRLeAehgjEJViWXTIDc9s5RXhSwCIlUJJ174EcN3dzlqfnsRJCWJtVqopoCusLSYmImvzZXoAxdFsLqB07UO6S9mHbyG33nVPtuO0PgrAaYLzKHhzYX6I07jjsCgvbFlOCeRYBVXaS2v9-nO4muYQH_XKfnYe-e88DxW8w7pabjaizZOpgF_5Ib3LTiRnZYZw-mR2aWMj3oOGqpdEbZzHa1oO1mAhEgZOhhxmhElqpBYharcKOcRWuMZI09JF_kQk885vuJ9A5n4E0-SFEFuDiCTjAk6e8MYdxXQ6IHk7tgIH8dUAhO5_rXIpY4Nc5Sp0aBwmloAY1UUv4HM-r4SuFCfkf0p7NeoAOp3r2VVEfYeA7KJExiUMICytdx-Id1mi0xy3puyoG_8lCsznjhyLYLU6wW9tUuBymoOCjTwMyQesLqxmVRBcKxK7_Iu1cGw84PshtWF-yiJCbsSS1y45QIO0VLY6Ne4dkvvUJtBlQNPfaATM6R48h2QYJALNuCjnvTx9_deInmg2G5q042kMiufvQUGFZi0U8hWF0m8ADW99QLO7QLXOqF0mTrvQrfWG3KCv8EDQJf23jheFFIJXBKtEIbdh8gojJ-wMfSEr8Hg3QkG-lO2IECIqScb1Q9v1CYqYAAx6Uoxg9UzVQrmrbMOGTjvFwguRYID3eyeOdAbyzcaWOrl_1C0YyyChkbbQC62MCc8bDdN_PGL21Q-cqpqCGCIa37NT1hlfRycrTiiOO-HzOPZv0ApcOc=w445-h592-s-no?authuser=0",
      caption: "Darjeeling"
    },
    {
      image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco"
    },
    {
      image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco"
    }
  ];

  const captionStyle = {
    fontSize: '0em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }

  return (
    <div className="Carrusel">
      <div style={{ textAlign: "center" }}>
          <Carousel
            data={data}
            time={5000}
            width="39vw"
            height="24vw"
            captionStyle={captionStyle}
            radius="0.5vw"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="top"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="2vw"
            slideBackgroundColor="transparent"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="120vw"
            style={{
              display: "inline-table",
              textAlign: "center",
              maxWidth: "100%",
              margin: "2%",
            }}
          />
        </div>
      </div>
  );
}

export default Carrusel;
