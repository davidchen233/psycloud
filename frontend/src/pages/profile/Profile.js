import { useState, useRef, useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import {
  FaRegUser,
  FaCalendarCheck,
  FaShoppingBag,
  FaTasks,
  FaUserMd,
} from 'react-icons/fa';
import './profile.css';
import { PUBLIC_URL } from '../../config/config';

// inner pages
import Personal from './Personal.js';
import Consultation from './Consultation';
import Orders from './Orders';
import Test from './Test';
import Psychologist from './Psychologist';

// popup modals
import PwdModal from './modals/PwdModal';
import PersonalInfoForm from './modals/PersonalInfoForm';
import OrderModal from './modals/OrderModal';
import PsyInfoForm from './modals/PsyInfoForm';
import EditPsyInfoForm from './modals/EditPsyInfoForm';

const Profile = () => {
  let user = JSON.parse(localStorage.getItem('user'));
  const [avatar, setAvatar] = useState(user.avatar);

  const [currentView, setCurrentView] = useState('profile');
  const [showPwdModal, setShowPwdModal] = useState(false);
  const [showPersonalModal, setShowPersonalModal] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [orderId, setOrderId] = useState(0);
  const [showPsyInfoForm, setShowPsyInfoForm] = useState(false);
  const [showEditPsyInfoForm, setShowEditPsyInfoForm] = useState(false);

  const profileRef = useRef();
  const consultationRef = useRef();
  const ordersRef = useRef();
  const testRef = useRef();
  const psychologistRef = useRef();

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow =
      showPwdModal ||
      showPersonalModal ||
      showOrderModal ||
      showPsyInfoForm ||
      showEditPsyInfoForm
        ? 'hidden'
        : 'auto';
  }, [
    showPwdModal,
    showPersonalModal,
    showOrderModal,
    showPsyInfoForm,
    showEditPsyInfoForm,
  ]);

  function handleClick(e) {
    let id = e.currentTarget.getAttribute('data-id');
    setCurrentView(id);

    profileRef.current.classList.remove('active');
    consultationRef.current.classList.remove('active');
    ordersRef.current.classList.remove('active');
    testRef.current.classList.remove('active');
    psychologistRef.current.classList.remove('active');
    e.currentTarget.classList.add('active');
  }

  const togglePwdModal = () => {
    setShowPwdModal(!showPwdModal);
  };

  const togglePersonalModal = () => {
    setShowPersonalModal(!showPersonalModal);
  };

  const toggleOrderModal = () => {
    setShowOrderModal(!showOrderModal);
  };

  const togglePsyInfoForm = () => {
    setShowPsyInfoForm(!showPsyInfoForm);
  };

  const toggleEditPsyInfoForm = () => {
    setShowEditPsyInfoForm(!showEditPsyInfoForm);
  };

  const switchView = () => {
    switch (currentView) {
      case 'profile':
        return (
          <Personal
            togglePwdModal={togglePwdModal}
            togglePersonalModal={togglePersonalModal}
            setAvatar={setAvatar}
          />
        );
      case 'consultation':
        return <Consultation />;
      case 'orders':
        return (
          <Orders
            setShowOrderModal={setShowOrderModal}
            setOrderId={setOrderId}
          />
        );
      case 'test':
        return <Test />;
      case 'psychologist':
        return (
          <Psychologist
            togglePsyInfoForm={togglePsyInfoForm}
            toggleEditPsyInfoForm={toggleEditPsyInfoForm}
          />
        );
      default:
        return <Personal />;
    }
  };

  return (
    <>
      {showPwdModal === true && <PwdModal togglePwdModal={togglePwdModal} />}
      {showPersonalModal === true && (
        <PersonalInfoForm
          togglePersonalModal={togglePersonalModal}
          setShowPersonalModal={setShowPersonalModal}
        />
      )}
      {showOrderModal === true && (
        <OrderModal toggleOrderModal={toggleOrderModal} orderId={orderId} />
      )}
      {showPsyInfoForm === true && (
        <PsyInfoForm togglePsyInfoForm={togglePsyInfoForm} />
      )}
      {showEditPsyInfoForm === true && (
        <EditPsyInfoForm toggleEditPsyInfoForm={toggleEditPsyInfoForm} />
      )}
      <div className="container">
        <div className="profile-template">
          <div>
            <div className="navigation">
              <div className="avatar">
                <img src={PUBLIC_URL + avatar} alt="" />
              </div>
              <ul>
                <li
                  data-id="profile"
                  className="list active"
                  ref={profileRef}
                  onClick={handleClick}
                >
                  <div className="listItem">
                    <span className="iconBx">
                      <FaRegUser className="icon" />
                    </span>
                    <span className="title">個人資訊</span>
                  </div>
                </li>
                <li
                  data-id="consultation"
                  className="list"
                  ref={consultationRef}
                  onClick={handleClick}
                >
                  <div className="listItem">
                    <span className="iconBx">
                      <FaCalendarCheck className="icon" />
                    </span>
                    <span className="title">我的預約</span>
                  </div>
                </li>
                <li
                  data-id="orders"
                  className="list"
                  ref={ordersRef}
                  onClick={handleClick}
                >
                  <div className="listItem">
                    <span className="iconBx">
                      <FaShoppingBag className="icon" />
                    </span>
                    <span className="title">我的訂單</span>
                  </div>
                </li>
                <li
                  data-id="test"
                  className="list"
                  ref={testRef}
                  onClick={handleClick}
                >
                  <div className="listItem">
                    <span className="iconBx">
                      <FaTasks className="icon" />
                    </span>
                    <span className="title">檢測結果</span>
                  </div>
                </li>
                <li
                  data-id="psychologist"
                  className={`list ${user.isPsychologist ? '' : 'invisible'}`}
                  ref={psychologistRef}
                  onClick={handleClick}
                >
                  <div className="listItem">
                    <span className="iconBx">
                      <FaUserMd className="icon" />
                    </span>
                    <span className="title">心理師專區</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {user ? (
            <div className="contentBox">{switchView()}</div>
          ) : (
            <p className="p-4">使用者未登入</p>
          )}
        </div>
      </div>
    </>
  );
};

export default withRouter(Profile);
