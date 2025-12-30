
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PasswordModal from './PasswordModal';

interface ProtectedCaseStudyProps {
  children: React.ReactNode;
  category?: 'service' | 'product';
}

const ProtectedCaseStudy: React.FC<ProtectedCaseStudyProps> = ({ children, category = 'product' }) => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storageKey = category === 'service' ? 'serviceDesignAccess' : 'caseStudyAccess';
    const hasAccess = localStorage.getItem(storageKey) === 'true';
    if (hasAccess) {
      setIsAuthorized(true);
    } else {
      setShowPasswordModal(true);
    }
  }, [category]);

  const handleModalClose = (open: boolean) => {
    setShowPasswordModal(open);
    if (!open && !isAuthorized) {
      // If modal is closed without authorization, redirect to home
      navigate('/', { replace: true });
    }
  };

  const handleAuthorized = () => {
    setIsAuthorized(true);
    setShowPasswordModal(false);
  };

  return (
    <>
      {isAuthorized ? children : null}
      <PasswordModal
        open={showPasswordModal}
        onOpenChange={handleModalClose}
        onAuthorized={handleAuthorized}
        category={category}
      />
    </>
  );
};

export default ProtectedCaseStudy;
