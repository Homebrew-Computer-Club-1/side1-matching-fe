import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { fetchGetLogout } from '../../api';
interface ILogoutModal {
    isOpen:boolean;
    setLogoutModal:any;
}

export function LogoutModal({isOpen,setLogoutModal} : ILogoutModal) {
    const navigate = useNavigate();
    const handleClose = () => setLogoutModal(false);
    const handleShow = () => setLogoutModal(true);
    const logout = async () => {
        try {
            await fetchGetLogout();
            navigate('/auth/login')
        } catch {
                alert('로그아웃 실패')
        }
    }

    return (
    <>
        <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>로그아웃 확인</Modal.Title>
        </Modal.Header>
        <Modal.Body>정말 로그아웃 하시겠습니까?</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            닫기
            </Button>
            <Button variant="primary" onClick={logout}>
            로그아웃
            </Button>
        </Modal.Footer>
        </Modal>
    </>
    );
}