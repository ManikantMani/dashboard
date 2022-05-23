import './section8.css';
import img1 from '../../images/11.png'

const Section8 = () => {
  return (
    <>
      <div className="section_container">
        <div className="section__name_top_button_group">
          <div className="section_name_top"><span>Section</span></div>
          <div className="section_top_right_group">
            <span><i class="fa-solid fa-money-check"></i></span> <span>0.2$xyz</span>
            <div className="section_top_right_div">
              <button className="section_top_right_button">Tier-1</button>
            </div>
          </div>
        </div>
        <div className="section_tutorial_container">
          <div className="section_tutorial_text">
            <p className="section_tutorial_p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button className="section_tutorial_button">Tutorial</button>
          </div>
          <div className="section_tutorial_image">
            <img src={img1} alt="" className="section_tutorial_img" />
          </div>
          <div className="section_tutorial_cross_button">
            <button className="section_tutorial_cross_button_mark"><span><i class="fa-solid fa-xmark"></i></span></button>
          </div>
        </div>
        <div className="section_reward_container">
          <div className="section_reward_text_container">
            <div className="section_reward_text_main">
              <h3 className="section_reward_h3">Your reward</h3>
              <h1 className="section_reward_h1">$ 0.26231428</h1>
            </div>
            <div className="section_reward_button_group">
              <button className="section_reward_bottom_button">$40 AVAX</button>
              <button className="section_reward_bottom_button">$10 BNB</button>
              <button className="section_reward_bottom_button">$210 BTC</button>
            </div>
          </div>
          <button className="section_reward_right_button"><span><i class="fa-solid fa-share-from-square"></i></span><span>Custom link</span></button>
        </div>
        <div className="section_fee_container">
          <div className="fee_section_box1">
            <div className="fee_section_h2_logo">
              <div className="fee_section_logo"><span><i class="fa-solid fa-filter-circle-dollar"></i></span></div>
              <h2 className="fee_section_h2">12.5% of fee</h2>
            </div>
            <p className="fee_section_p">Your Referral Link for xyz</p>
            <div className="fee_section_link_box">
              <div className="fee_section_link">https://unityexchange.design </div>
              <div className="fee_section_link_icon"><button><span><i class="fa-solid fa-clone"></i></span></button></div>
            </div>
          </div>
          <div className="fee_section_box1">
            <div className="fee_section_h2_logo">
              <div className="fee_section_logo"><span><i class="fa-solid fa-filter-circle-dollar"></i></span></div>
              <h2 className="fee_section_h2">12.5% of fee</h2>
            </div>
            <p className="fee_section_p">Your Referral Link for xyz</p>
            <div className="fee_section_link_box">
              <div className="fee_section_link">https://unityexchange.design </div>
              <div className="fee_section_link_icon"><button><span><i class="fa-solid fa-clone"></i></span></button></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section8;