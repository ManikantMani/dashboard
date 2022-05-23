import "./footer.css";
import blogo from '../../images/bt-logo.png'

const Footer = () => {
  return (
    <>
        <div className="footer_container">
          <div className="footer_top_button_group">
            <button className="footer_avalanche_button"><img src={blogo} alt="" />Avalanche <span><i class="fa-solid fa-angle-down"></i></span></button>
            <button className="footer_second_button"><span><i class="fa-solid fa-money-check"></i></span>0Xf6...1353 <span><i class="fa-solid fa-angle-down"></i></span></button>
          </div>
          <div className="footer_custom_link_div">
            <div className="footer_back_button"><span><i class="fa-solid fa-arrow-left-long"></i></span></div>
            <h2 className="footer_custom_link_h2">Custom link</h2>
          </div>
          <p className="footer_link_p">https://testnet.xyz.xyz/trade?ref=</p>
          <div className="footer_input_main">
            <input type='text' placeholder="ENTER" className="footer_input" />
          </div>
          <div className="footer_bottom_button_group">
          <button className="section_reward_right_button"><span><i class="fa-solid fa-share-from-square"></i></span><span>Custom link</span></button>
          <button className="footer_bottm_cencle_button"><span><i class="fa-solid fa-arrow-right-to-bracket"></i></span><span>Cencle</span></button>
          </div>
        </div>
    </>
  )
}

export default Footer