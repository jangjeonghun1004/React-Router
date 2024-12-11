# App 설정

    import { BrowserRouter } from 'react-router-dom'
    <BrowserRouter>
        <App />
    </BrowserRouter>

# Routes & Route

    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<Error />} />
    </Routes>

# Link

    <Link to={'/'}>Home</Link>

# useNavigation

    const navigate = useNavigate();
    <button onClick={() => navigate('/contact')}>Contact</button>

# useParams

    const {id} = useParams();

# queryParam

    const location = useLocation();
    const queryParam = new URLSearchParams(location.search);
    const keyWord = queryParam.get('keyWord');
