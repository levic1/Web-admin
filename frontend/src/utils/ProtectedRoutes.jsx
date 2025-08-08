import { useNavigate } from "react-router"
import { useAuth } from "../context/AuthContext"
import { useEffect } from "react"

const ProtectedRoutes = ({ children, requireRole }) => {
    const {user } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if(!user) {
            navigate('/login')
        }

        if (!requiredRole.includes(user.role)) {
            navigate('/unauthorized')
            return;
        }
    }, [user, navigate, requireRole])

    if(!user) return null;
    if(!required.includes(user.role)) return null

    return children
}