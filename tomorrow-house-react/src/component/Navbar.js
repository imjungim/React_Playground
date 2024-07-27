import React from 'react'

const Navbar = () => {
  return (
    <nav class="select2-dropdown">
        {/* <h2 class="visually-hidden">메뉴</h2> */}
        {/* <!-- 커뮤니티 --> */}
        <div class="drawer-menu is-community">
          <button class="drawer-menu-button btn" type="button">
            커뮤니티
            <div> ^ </div>
          </button>

          <div class="drawer-menu-content">
            <ul class="drawer-menu-list">
              <li class="drawer-menu-item"><a href="/">홈</a></li>
              <li class="drawer-menu-item"><a href="/">사진</a></li>
              <li class="drawer-menu-item"><a href="/">집들이</a></li>
              <li class="drawer-menu-item"><a href="/">노하우</a></li>
              <li class="drawer-menu-item"><a href="/">전문가집들이</a></li>
              <li class="drawer-menu-item"><a href="/">셀프가이드</a></li>
              <li class="drawer-menu-item"><a href="/">질문과답변</a></li>
              <li class="drawer-menu-item"><a href="/">이벤트</a></li>
            </ul>
          </div>
        </div>

        {/* <!-- 스토어 --> */}
        <div class="drawer-menu is-active is-store">
          <button class="drawer-menu-button" type="button">
            <i class="ic-store" aria-hidden></i>
            스토어
            <i class="ic-chevron" aria-hidden></i>
          </button>

          <div class="drawer-menu-content">
            <ul class="drawer-menu-list">
              <li class="drawer-menu-item"><a href="/">스토어</a></li>
              <li class="drawer-menu-item"><a href="/">홈카테고리</a></li>
              <li class="drawer-menu-item"><a href="/">신혼가구</a></li>
              <li class="drawer-menu-item"><a href="/">베스트</a></li>
              <li class="drawer-menu-item"><a href="/">오늘의딜</a></li>
              <li class="drawer-menu-item"><a href="/">연휴특가</a></li>
              <li class="drawer-menu-item"><a href="/">월동준비</a></li>
              <li class="drawer-menu-item"><a href="/">리퍼마켓</a></li>
              <li class="drawer-menu-item is-active">
                <a href="/"
                  >기획전
                  <i class="ic-new" lang="en" aria-label="New"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- 인테리어 시공 --> */}
        <div class="drawer-menu is-expert">
          <button class="drawer-menu-button" type="button">
            <i class="ic-expert" aria-hidden></i>
            인테리어시공
            <i class="ic-chevron" aria-hidden></i>
          </button>

          <div class="drawer-menu-content">
            <ul class="drawer-menu-list">
              <li class="drawer-menu-item"><a href="/">시공홈</a></li>
              <li class="drawer-menu-item"><a href="/">시공스토어</a></li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Navbar