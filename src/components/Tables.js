import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import React from "react";

export default function Tables() {
  return (
    <TableContainer>
      <Table aria-label="leads-table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((table) => (
            <TableRow key={table.id}>
              <TableCell>{table.id}</TableCell>
              <TableCell>{table.first_name}</TableCell>
              <TableCell>{table.last_name}</TableCell>
              <TableCell>{table.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const tableData = [
  {
    id: 1,
    first_name: "Neill",
    last_name: "Fernie",
    email: "nfernie0@timesonline.co.uk",
    gender: "Male",
    ip_address: "64.224.56.127",
  },
  {
    id: 2,
    first_name: "Bowie",
    last_name: "Pitone",
    email: "bpitone1@msn.com",
    gender: "Male",
    ip_address: "198.105.61.53",
  },
  {
    id: 3,
    first_name: "Mab",
    last_name: "Ludee",
    email: "mludee2@livejournal.com",
    gender: "Female",
    ip_address: "106.252.54.190",
  },
  {
    id: 4,
    first_name: "Christian",
    last_name: "Drynan",
    email: "cdrynan3@mysql.com",
    gender: "Female",
    ip_address: "163.39.59.129",
  },
  {
    id: 5,
    first_name: "Cassius",
    last_name: "Kleynen",
    email: "ckleynen4@studiopress.com",
    gender: "Male",
    ip_address: "175.97.200.36",
  },
  {
    id: 6,
    first_name: "Gerrilee",
    last_name: "Gavini",
    email: "ggavini5@sitemeter.com",
    gender: "Female",
    ip_address: "252.115.220.12",
  },
  {
    id: 7,
    first_name: "Cory",
    last_name: "Perham",
    email: "cperham6@webmd.com",
    gender: "Female",
    ip_address: "13.46.27.245",
  },
  {
    id: 8,
    first_name: "Willi",
    last_name: "Gradly",
    email: "wgradly7@github.com",
    gender: "Female",
    ip_address: "230.150.86.110",
  },
  {
    id: 9,
    first_name: "Gasparo",
    last_name: "Sudron",
    email: "gsudron8@facebook.com",
    gender: "Male",
    ip_address: "176.194.62.129",
  },
  {
    id: 10,
    first_name: "Haleigh",
    last_name: "Sollis",
    email: "hsollis9@nyu.edu",
    gender: "Male",
    ip_address: "216.106.242.235",
  },
];
