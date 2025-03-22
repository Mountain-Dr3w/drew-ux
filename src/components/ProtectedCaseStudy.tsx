
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PasswordModal from './PasswordModal';

interface ProtectedCaseStudyProps {
  children: React.ReactNode;
}

const ProtectedCaseStudy: React.FC<ProtectedCaseStudyProps> = ({ children }) => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const hasAccess = localStorage.getItem('caseStudyAccess') === 'true';
    if (hasAccess) {
      setIsAuthorized(true);
    } else {
      setShowPasswordModal(true);
      // Redirect to home page if not authorized
      if (location.pathname !== '/') {
        navigate('/', { replace: true });
      }
    }
  }, [location.pathname, navigate]);

  const handleModalClose = (open: boolean) => {
    setShowPasswordModal(open);
    if (!open) {
      const hasAccess = localStorage.getItem('caseStudyAccess') === 'true';
      if (hasAccess) {
        setIsAuthorized(true);
        // Navigate to the originally requested page
        if (location.state?.from) {
          navigate(location.state.from);
        } else {
          navigate(location.pathname);
        }
      } else {
        navigate('/', { replace: true });
      }
    }
  };

  const handleAuthorized = () => {
    setIsAuthorized(true);
    setShowPasswordModal(false);
    // Navigate to the originally requested case study
    if (location.state?.from) {
      navigate(location.state.from);
    } else {
      navigate(location.pathname);
    }
  };

  return (
    <>
      {isAuthorized ? children : null}
      <PasswordModal
        open={showPasswordModal}
        onOpenChange={handleModalClose}
        onAuthorized={handleAuthorized}
      />
    </>
  );
};

export default ProtectedCaseStudy;
