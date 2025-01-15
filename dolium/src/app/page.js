'use client'
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { useState } from "react";
import {
  AppBar, Toolbar, Typography, Button, Box,
  Table,
  TableBody,
  TableSortLabel,
  TableCell,
  TablePagination,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import data1 from './data.json'
import SegmentIcon from '@mui/icons-material/Segment';
const pages = ['Dashboard', 'Collection', 'Model Tree', 'Import', 'Publish'
  , 'Call Out Help', 'Interactive Help', 'Organisation'
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';












export default function Collection() {

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");



  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSort = (property) => {
    const isAscending = orderBy === property && order === "asc";
    setOrder(isAscending ? "desc" : "asc");
    setOrderBy(property);
  };

  // const sortedData = [...data1].sort((a, b) => {
  //   if (order === "asc") {
  //     return a[orderBy] > b[orderBy] ? 1 : -1;
  //   } else {
  //     return a[orderBy] < b[orderBy] ? 1 : -1;
  //   }
  // });

  const sortedData = [...data1]
  .filter((row) => {
    // Filter rows based on the search query
    return (
      row.name.toLowerCase().includes(searchQuery.toLowerCase()) 
    );
  })
  .sort((a, b) => {
    if (order === "asc") {
      return a[orderBy] > b[orderBy] ? 1 : -1;
    } else {
      return a[orderBy] < b[orderBy] ? 1 : -1;
    }
  });

  const handleSearch = (e) => {
    setSearchQuery(e.target.value); // Update search query state
  };


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset page to 0 when rows per page changes
  };

 

  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/collection")
  }



  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#ffffff' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'black',
                textDecoration: 'none',
              }}
            >
              Dolium
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: 'center', }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
              <IconButton sx={{ ml: 2 ,color:'black' }} onClick={() => console.log('More options')}>
                <NotificationsIcon />
                <SettingsIcon />
                <PersonIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <AppBar
        position="static"
        style={{
          marginTop: '0px',
          fontWeight: 'bold',
          fontSize: '22px',
          backgroundColor: '#f8faff',
          padding: '10px',
          boxShadow: 'none',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center', // Align items vertically
            justifyContent: 'space-between', // Distribute space between items
            flexWrap: 'wrap', // Allow wrapping on smaller screens
            gap: '10px', // Space between elements
          }}
        >
          <Toolbar
            variant="h2"
            sx={{ flexGrow: 1 }}
            style={{
              color: 'black',
              fontSize: '22px',
            }}
          >
            Collections
          </Toolbar>

          <input
            type="text"
            placeholder="Search or Add Collection"
            style={{
              flexGrow: 2, // Input grows to take available space
              maxWidth: '300px', // Limit width for larger screens
              padding: '8px',
              borderRadius: '10px',
              border: '1px solid #ccc',
            }}
            value={searchQuery} // Bind search input value
        onChange={handleSearch}

          />

          <Button
            onClick={handleButtonClick}
            style={{
              flexShrink: 0, // Prevent shrinking on small screens
              backgroundColor: 'black',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            startIcon={<ControlPointIcon />}
          >
            Add Collections
          </Button>
        </div>
      </AppBar>

      <TableContainer component={Paper} style={{ maxWidth: "100%", overflowX: "auto", maxHeight: "600px" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "name"}
                  direction={orderBy === "name" ? order : "asc"}
                  onClick={() => handleSort("name")}
                  style={{
                    fontWeight: 'bold'
                  }}
                >
                  Collection Name

                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "admins"}
                  direction={orderBy === "admins" ? order : "asc"}
                  onClick={() => handleSort("admins")}
                  style={{
                    fontWeight: 'bold'
                  }}
                >
                  # Of Collection Admins
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "modelers"}
                  direction={orderBy === "modelers" ? order : "asc"}
                  onClick={() => handleSort("modelers")}
                  style={{
                    fontWeight: 'bold'
                  }}
                >
                  # Of Modelers
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "version"}
                  direction={orderBy === "version" ? order : "asc"}
                  onClick={() => handleSort("version")}
                  style={{
                    fontWeight: 'bold'
                  }}
                >
                  Version
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "lastRelease"}
                  direction={orderBy === "lastRelease" ? order : "asc"}
                  onClick={() => handleSort("lastRelease")}
                  style={{
                    fontWeight: 'bold'
                  }}
                >
                  Last Release
                </TableSortLabel>
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
              <TableRow key={index}>
                <TableCell style={{ color: "#675fff", cursor: "pointer" }}>
                  {row.name}
                </TableCell>
                <TableCell>{row.admins}</TableCell>
                <TableCell>{row.modelers}</TableCell>
                <TableCell>{row.version}</TableCell>
                <TableCell>{row.lastRelease}</TableCell>
                <TableCell>
                  <IconButton>
                    <MoreHorizIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className='paginationMainPage'>
        <TablePagination
          rowsPerPageOptions s={[5, 10, 25]}
          component="div"
          count={sortedData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          style={{
            backgroundColor: 'white', 
            padding: '10px',
            borderTop: '1px solid #ddd', 
          }}
        />
        </div>
      </TableContainer>
      <Box
        sx={{
          marginTop: "40px",
          textAlign: "center",
          fontSize: "14px",
          color: "#666",
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '10px',
          margin: '10px',
         
        }}
      >
        {/* <Typography variant="body2">
          Copyright @ 2025 Dolium
        </Typography> */}
        <Typography variant="body2">Powered by
        </Typography>

        <Typography
          sx={{
            fontFamily: 'serif',
            fontSize: '20px',
            color: '#44436e'
          }}
        >
          DOLIUM
        </Typography>

        <Typography sx={{color:'#675fff'}}>
          V1.2411.13
        </Typography>
      </Box>

    </div>
  );
}
