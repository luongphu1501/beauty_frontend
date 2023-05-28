import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useDispatch } from 'react-redux';
import { Link, redirect } from "react-router-dom"
import UserSlice from '../../redux/UserSlice';

const SiderBar = () => {

    const dispatch = useDispatch()
    const Logout = () => {

        dispatch(UserSlice.actions.deleteAll())

    }
    return (<>
        <Sidebar>
            <Menu>
                <MenuItem component={<Link to="/admin" />}> DashBoard </MenuItem>
                <MenuItem component={<Link to="/admin/user" />}> Người dùng </MenuItem>
                <MenuItem component={<Link to="/admin/product" />}> Hàng hóa  </MenuItem>
                <MenuItem component={<Link to="/admin/order" />}> Đơn hàng </MenuItem>

                <SubMenu label="Thống kê">
                    <MenuItem className='childMenu' component={<Link to="/admin/statrevenue" />}> Doanh thu</MenuItem>
                    <MenuItem className='childMenu' component={<Link to="/admin/statproduct" />}> Sản phẩm</MenuItem>
                    <MenuItem className='childMenu' component={<Link to="/admin/statseller" />}> Bán chạy</MenuItem>
                </SubMenu>
                <MenuItem onClick={Logout} component={<Link to={"/login"} />}> Đăng xuất </MenuItem>
            </Menu>
        </Sidebar>;
    </>)
}
export default SiderBar