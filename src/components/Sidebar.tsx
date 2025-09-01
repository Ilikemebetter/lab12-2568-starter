import { NavLink as RouterNavLink } from "react-router-dom";
import {
  NavLink,
  Stack,
  Box,
  Avatar,
  Indicator,
  Text,
  Group,
} from "@mantine/core";
interface SidebarProps  {
  userName: string;
  type?: "admin" |"student";
}
export type { SidebarProps };
export default function Sidebar({ userName, type }: SidebarProps) {
  return (
    <Stack
      align="stretch"
      justify="space-between"
      gap="md"
      style={{ height: "100%" }}
    >
      {/* Menu / เมนู*/}
      <Box>
        <NavLink
          color="cyan"
          label="Home"
          component={RouterNavLink}
          to="/"
          active
        />
        <NavLink
          color="cyan"
          label="About"
          component={RouterNavLink}
          to="/about"
        />
        {/* ตัวอย่าง ใช้ Navlink กับ  components อื่นๆ ของ mantine */}
        {/* <Text component={RouterNavLink} to="/">
          Test
        </Text> */}
            </Box>
            <Box p={10}>
        <Group>
          {/* Indicator สีเขียว แสดงสถานะออนไลน์ */}
          <Indicator color="green" size={12} offset={5} position="bottom-end" withBorder>
            <Avatar src="/id.JPG" radius="xl" size={40} />
          </Indicator>

            <Text fw={600}>User: {userName} : {type} </Text>
        </Group>
      </Box>
    </Stack>
  );
}