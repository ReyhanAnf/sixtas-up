import LoginForm from '../../ui/auth/login-form';
import Navbar from '@/app/ui/navigation/navbar';

export default function Page() {
	return (
		<div className="flex relative min-h-screen flex-col items-center justify-center py-12 px-2">
			<LoginForm />
		</div>
	)
}
