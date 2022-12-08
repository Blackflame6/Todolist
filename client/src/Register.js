import { useRef, useState, useEffect } from "react";
import { FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // useEffect(()=> {
  //   useRef.curent.focus()
  // },[])

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(pwd);
    console.log(result);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1>Register</h1>
      <form>
        <label htmlFor="username">
          Username:
          <span className={validName ? "valid" : "hide"}>
            <FaCheck />
          </span>
          <span className={validName || !user ? "hide" : "invalid"}>
            <FaTimes />
          </span>
        </label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => {
            setUser(e.target.value);
          }}
          required
          aria-invalid={validName ? "false" : "true"}
          aria-decribedby="uidnote"
          onFocus={() => {
            setUserFocus(true);
          }}
          onBlur={() => {
            setUserFocus(false);
          }}
        />
        <p
          id="uidnote"
          className={
            userFocus && user && !validName ? "instructions" : "offscreen"
          }
        >
          <FaInfoCircle /> 4 to 24 characters.
          <br /> Must begin with a letter. <br />
          Letters, numbers, underscores, hyphens allowed.
        </p>
        <label htmlFor="password">
          Password:
          <span className={validPwd ? "valid" : "hide"}>
            <FaCheck />
          </span>
          <span className={validPwd || !pwd ? "hide" : "invalid"}>
            <FaTimes />
          </span>
        </label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          required
          aria-invalid={validPwd ? "false" : "true"}
          aria-describedby="pwdnote"
          onFocus={() => setPwdFocus(true)}
          onBlur={() => setPwdFocus(false)}
        />
        <p
          id="pwdnote"
          className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
        >
          <FaInfoCircle />
          8 to 24 characters.
          <br />
          Must includee uppercase and lowercase letter, a number and a special
          character. <br />
          Allowed special charcters:{" "}
          <span aria-label="exclamation mark">!</span>
          <span aria-label="at symbol">@</span>
          <span aria-label="hashtag">#</span>
          <span aria-label="dollar sign">$</span>
          <span aria-label="percent">%</span>
        </p>
        <label htmlFor="confirm_pwd">
          Confirm Password:
          <span className={validMatch && matchPwd ? "valid" : "hide"}>
            <FaCheck />
          </span>

          <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
            <FaTimes />
          </span>
        </label>

      <input type="" />
      </form>
    </section>
  );
};

export default Register;
