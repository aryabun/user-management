export const useGoBack = () => {
    const router = useRouter()

    return () => {
        // check window history, 
        if (window.history.length > 0) {
            router.back()
        } else {

            navigateTo('/')
        }
    }
}