import { Component, OnInit } from '@angular/core';
import { Company } from '../../models/company.entity';
import { Worker } from '../../models/worker.entity';
import { CompanyService } from '../../services/company.service';
import { WorkerService } from '../../services/worker.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  companies: Company[] = [];
  workers: Worker[] = [];
  selectedCompany: Company | null = null;
  selectedWorker: Worker | null = null;
  loading: boolean = false;
  error: string | null = null;

  constructor(
    private companyService: CompanyService,
    private workerService: WorkerService
  ) {}

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.loading = true;
    this.companyService.getAllCompanies().subscribe({
      next: (data) => {
        this.companies = data;
        // Seleccionamos la primera compañía por defecto
        if (this.companies.length > 0) {
          this.selectedCompany = this.companies[0];
          this.loadWorkers(this.selectedCompany.id_company);
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = err;
        this.loading = false;
      }
    });
  }
}
