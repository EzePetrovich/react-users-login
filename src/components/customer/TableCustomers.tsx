import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import Customer from '@src/models/Customer.class';

interface TableCustomersProps {
  customers?: Customer[];
}

export const TableCustomers = ({ customers = [] }: TableCustomersProps) => {
  return (
    <Table
      sx={{ minWidth: 800, padding: '1rem' }}
      stickyHeader
      aria-label='customers table'
    >
      <TableHead>
        <TableRow>
          <TableCell>Firstname</TableCell>
          <TableCell>Lastname</TableCell>
          <TableCell>Birthdate</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Create date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {customers.map((customer) => (
          <TableRow
            key={customer.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component='th' scope='row'>
              {customer.firstName}
            </TableCell>
            <TableCell>{customer.lastName}</TableCell>
            <TableCell>{customer.birth_date}</TableCell>
            <TableCell>{customer.email}</TableCell>
            <TableCell>{customer.create_date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
