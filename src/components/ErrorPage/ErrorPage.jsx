import { NotificationText } from './ErrorRage.styled';

const ErrorPage = ({error}) => {
    return <NotificationText>{error}</NotificationText>
}

export default ErrorPage;