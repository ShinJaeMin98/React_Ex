import { useTranslation } from "react-i18next"; 
import { useState, useEffect, useRef } from "react";
import MainTitle from "../commons/MainTitle";

const LoginForm = () => {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState("한국어");
    // let refUserId = React.createRef(); // 클래스형 컴포넌트 + 함수형 컴포넌트 둘다 사용 가능
    let refUserId = useRef(); // 함수형 컴포넌트 에서만 사용 가능
    let refTitle = useRef();
    

  useEffect(() => {
    /**
     * current 속성을 통해서 DOM에 접근
     */
    //console.log(refUserId.current);
    refUserId.current.focus();

    refTitle.current.printInfo('메세지');
  }, []);

    /*
    let refUserId;

    useEffect(() => {
        // 렌더링 직후, 갱신 직후 -> 렌더링 이후에 할 공통 작업
        refUserId.focus();
    }, [refUserId]);
    */

    const handleLanguage = (e) => {
        console.log("클릭!");
        const el = e.currentTarget;
        const lang = el.dataset.lang;
        i18n.changeLanguage(lang);
        setLanguage(lang === 'ko' ? '한국어' : 'English');
    };

    return (
        <>
            <MainTitle ref={refTitle}>{t('로그인')}</MainTitle>
            <div>
                {t('언어')} : {language}
            </div>

            <form>
                {/*
                <input
                type="text"
                ref={(ref) => (refUserId = ref)}
                name="userId"
                placeholder={t('아이디')}
                />
                */}
                <input
                    type="text"
                    name="userId"
                    placeholder={t('아이디')}
                    ref={refUserId}
                />
                <input type="password" name="userPw" placeholder={t('비밀번호')} />
                <button type="submit">{t('로그인')}</button>
            </form>
            <button type="button" onClick={handleLanguage} data-lang="ko">
                한국어
            </button>
            <button type="button" onClick={handleLanguage} data-lang="en">
                English
            </button>
        </>
    );
};

export default LoginForm;