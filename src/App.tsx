import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from '@carbon/react'
import { Breadcrumb, BreadcrumbItem } from '@carbon/react';
import { OverflowMenu, OverflowMenuItem } from '@carbon/react';



function App() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="cds--content">
        <div className="app-container">
          <h1>Coming soon...</h1>
          <p>Explore IBM history and culture of putting technology to work in the real world.</p>

          {/* somes components */}
          {/* Tables */}
          <Table
            aria-label="sample table"
            size="lg"
          >
            <TableHead>
              <TableRow>
                <TableHeader>
                  Name
                </TableHeader>
                <TableHeader>
                  Rule
                </TableHeader>
                <TableHeader>
                  Status
                </TableHeader>
                <TableHeader>
                  Other
                </TableHeader>
                <TableHeader>
                  Example
                </TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  Load Balancer 1
                </TableCell>
                <TableCell>
                  Round robin
                </TableCell>
                <TableCell>
                  Starting
                </TableCell>
                <TableCell>
                  Test
                </TableCell>
                <TableCell>
                  22
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Load Balancer 2
                </TableCell>
                <TableCell>
                  DNS delegation
                </TableCell>
                <TableCell>
                  Active
                </TableCell>
                <TableCell>
                  Test
                </TableCell>
                <TableCell>
                  22
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Load Balancer 3
                </TableCell>
                <TableCell>
                  Round robin
                </TableCell>
                <TableCell>
                  Disabled
                </TableCell>
                <TableCell>
                  Test
                </TableCell>
                <TableCell>
                  22
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Load Balancer 4
                </TableCell>
                <TableCell>
                  Round robin
                </TableCell>
                <TableCell>
                  Disabled
                </TableCell>
                <TableCell>
                  Test
                </TableCell>
                <TableCell>
                  22
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Load Balancer 5
                </TableCell>
                <TableCell>
                  Round robin
                </TableCell>
                <TableCell>
                  Disabled
                </TableCell>
                <TableCell>
                  Test
                </TableCell>
                <TableCell>
                  22
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Load Balancer 6
                </TableCell>
                <TableCell>
                  Round robin
                </TableCell>
                <TableCell>
                  Disabled
                </TableCell>
                <TableCell>
                  Test
                </TableCell>
                <TableCell>
                  22
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Load Balancer 7
                </TableCell>
                <TableCell>
                Round robin             
                </TableCell>
                <TableCell>
                  Disabled
                </TableCell>
                <TableCell>
                  Test
                </TableCell>
                <TableCell>
                  22
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          {/* Bruncrumb */}
          <Breadcrumb noTrailingSlash>
            <BreadcrumbItem>
              <a href="/#">
                Breadcrumb 1
              </a>
            </BreadcrumbItem>
            <BreadcrumbItem href="#">
              Breadcrumb 2
            </BreadcrumbItem>
            <BreadcrumbItem data-floating-menu-container>
              <OverflowMenu
                align="bottom"
                aria-label="Overflow menu in a breadcrumb"
              >
                <OverflowMenuItem itemText="Breadcrumb 3" />
                <OverflowMenuItem itemText="Breadcrumb 4" />
              </OverflowMenu>
            </BreadcrumbItem>
            <BreadcrumbItem href="#">
              Breadcrumb 5
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              Breadcrumb 6
            </BreadcrumbItem>
          </Breadcrumb>

          {/* Tables */}
          <Table
            aria-label="sample table"
            size="lg"
          >
            <TableHead>
              <TableRow>
                <TableHeader>
                  Name
                </TableHeader>
                <TableHeader>
                  Rule
                </TableHeader>
                <TableHeader>
                  Status
                </TableHeader>
                <TableHeader>
                  Other
                </TableHeader>
                <TableHeader>
                  Example
                </TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  Load Balancer 1
                </TableCell>
                <TableCell>
                  Round robin
                </TableCell>
                <TableCell>
                  Starting
                </TableCell>
                <TableCell>
                  Test
                </TableCell>
                <TableCell>
                  22
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Load Balancer 2
                </TableCell>
                <TableCell>
                  DNS delegation
                </TableCell>
                <TableCell>
                  Active
                </TableCell>
                <TableCell>
                  Test
                </TableCell>
                <TableCell>
                  22
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Load Balancer 3
                </TableCell>
                <TableCell>
                  Round robin
                </TableCell>
                <TableCell>
                  Disabled
                </TableCell>
                <TableCell>
                  Test
                </TableCell>
                <TableCell>
                  22
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Load Balancer 4
                </TableCell>
                <TableCell>
                  Round robin
                </TableCell>
                <TableCell>
                  Disabled
                </TableCell>
                <TableCell>
                  Test
                </TableCell>
                <TableCell>
                  22
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Load Balancer 5
                </TableCell>
                <TableCell>
                  Round robin
                </TableCell>
                <TableCell>
                  Disabled
                </TableCell>
                <TableCell>
                  Test
                </TableCell>
                <TableCell>
                  22
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Load Balancer 6
                </TableCell>
                <TableCell>
                  Round robin
                </TableCell>
                <TableCell>
                  Disabled
                </TableCell>
                <TableCell>
                  Test
                </TableCell>
                <TableCell>
                  22
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Load Balancer 7
                </TableCell>
                <TableCell>
                  Round robin
                </TableCell>
                <TableCell>
                  Disabled
                </TableCell>
                <TableCell>
                  Test
                </TableCell>
                <TableCell>
                  22
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          {/* Bruncrumb */}
          <Breadcrumb noTrailingSlash>
            <BreadcrumbItem>
              <a href="/#">
                Breadcrumb 1
              </a>
            </BreadcrumbItem>
            <BreadcrumbItem href="#">
              Breadcrumb 2
            </BreadcrumbItem>
            <BreadcrumbItem data-floating-menu-container>
              <OverflowMenu
                align="bottom"
                aria-label="Overflow menu in a breadcrumb"
              >
                <OverflowMenuItem itemText="Breadcrumb 3" />
                <OverflowMenuItem itemText="Breadcrumb 4" />
              </OverflowMenu>
            </BreadcrumbItem>
            <BreadcrumbItem href="#">
              Breadcrumb 5
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              Breadcrumb 6
            </BreadcrumbItem>
          </Breadcrumb>
          
          {/* Tables */}
          <Table
            aria-label="sample table"
            size="lg"
          >
            <TableHead>
              <TableRow>
                <TableHeader>
                  Name
                </TableHeader>
                <TableHeader>
                  Rule
                </TableHeader>
                <TableHeader>
                  Status
                </TableHeader>
                <TableHeader>
                  Other
                </TableHeader>
                <TableHeader>
                  Example
                </TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  Load Balancer 1
                </TableCell>
                <TableCell>
                  Round robin
                </TableCell>
                <TableCell>
                  Starting
                </TableCell>
                <TableCell>
                  Test
                </TableCell>
                <TableCell>
                  22
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Load Balancer 2
                </TableCell>
                <TableCell>
                  DNS delegation
                </TableCell>
                <TableCell>
                  Active
                </TableCell>
                <TableCell>
                  Test
                </TableCell>
                <TableCell>
                  22
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Load Balancer 3
                </TableCell>
                <TableCell>
                  Round robin
                </TableCell>
                <TableCell>
                  Disabled
                </TableCell>
                <TableCell>
                  Test
                </TableCell>
                <TableCell>
                  22
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Load Balancer 4
                </TableCell>
                <TableCell>
                  Round robin
                </TableCell>
                <TableCell>
                  Disabled
                </TableCell>
                <TableCell>
                  Test
                </TableCell>
                <TableCell>
                  22
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Load Balancer 5
                </TableCell>
                <TableCell>
                  Round robin
                </TableCell>
                <TableCell>
                  Disabled
                </TableCell>
                <TableCell>
                  Test
                </TableCell>
                <TableCell>
                  22
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Load Balancer 6
                </TableCell>
                <TableCell>
                  Round robin
                </TableCell>
                <TableCell>
                  Disabled
                </TableCell>
                <TableCell>
                  Test
                </TableCell>
                <TableCell>
                  22
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Load Balancer 7
                </TableCell>
                <TableCell>
                  Round robin
                </TableCell>
                <TableCell>
                  Disabled
                </TableCell>
                <TableCell>
                  Test
                </TableCell>
                <TableCell>
                  22
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
