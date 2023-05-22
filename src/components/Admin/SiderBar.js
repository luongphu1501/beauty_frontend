import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from "react-router-dom"
const SiderBar = () => {
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
                <MenuItem> Đăng xuất </MenuItem>
            </Menu>
        </Sidebar>;
    </>)
}
export default SiderBar