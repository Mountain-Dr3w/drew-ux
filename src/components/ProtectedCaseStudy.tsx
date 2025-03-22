
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PasswordModal from './PasswordModal';

interface ProtectedCaseStudyProps {
  children: React.ReactNode;
}

const ProtectedCaseStudy: React.FC<ProtectedCaseStudyProps> = ({ children }) => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const hasAccess = localStorage.getItem('caseStudyAccess') === 'true';
    if (!hasAccess) {
      setShowPasswordModal(true);
    }
  }, [location.pathname]);

  const handleModalClose = (open: boolean) => {
    setShowPasswordModal(open);
    if (!open && localStorage.getItem('caseStudyAccess') !== 'true') {
      navigate('/');
    }
  };

  return (
    <>
      {children}
      <PasswordModal
        open={showPasswordModal}
        onOpenChange={handleModalClose}
      />
    </>
  );
};

export default ProtectedCaseStudy;
