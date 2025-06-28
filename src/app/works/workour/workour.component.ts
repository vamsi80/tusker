import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectMedia } from '../../constants/media.constants';

interface Project {
  category: string;
  image: string;
  title: string;
  tag: string;
  images: string[];
}

@Component({
  selector: 'app-workour',
  templateUrl: './workour.component.html',
  styleUrl: './workour.component.css',
})
export class WorkourComponent implements OnInit {
  projects: Project[] = [
    ProjectMedia.BOSCH,
    ProjectMedia.ADI,
    ProjectMedia.JOHNNIE_WALKER,
    ProjectMedia.ZEBRA_ROBOTICS,
    ProjectMedia.VOLVO,
    ProjectMedia.DECK,
    ProjectMedia.EMIRATES,
    ProjectMedia.GOA_EMPORIUM,
    ProjectMedia.INDIA_PAVILION,
    ProjectMedia.INFOSYS_DAVOS,
    ProjectMedia.INFOSYS_AUSTRALIA_OPEN,
    ProjectMedia.INFOSYS_CS_WEEK,
    ProjectMedia.INFOSYS_HELIX,
    ProjectMedia.INFOSYS_MONEY,
    ProjectMedia.KARNATAKA_TOURISM,
    ProjectMedia.KIAB,
    ProjectMedia.ZOYA,
    ProjectMedia.LAMBORGHINI,
    ProjectMedia.SUNBURN,
  ];

  filteredProjects: Project[] = [];
  selectedImages: string[] = [];
  isModalVisible: boolean = false;
  activeCategory: string = 'all';
  visibleProjects: number = 6;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const tag = params['tag'];
      if (tag) {
        this.filteredProjects = this.projects.filter(
          (project) => project.tag === tag
        );
      } else {
        this.renderProjects('all');
      }
    });
  }

  renderProjects(category: string): void {
    if (category === 'all') {
      this.filteredProjects = this.projects;
    } else if (category === 'physical') {
      this.filteredProjects = this.projects.filter((project) =>
        ['customer', 'interiors', 'events'].includes(project.category)
      );
    } else if (category === 'digital') {
      this.filteredProjects = this.projects.filter((project) =>
        ['brand', 'immersive', 'film'].includes(project.category)
      );
    } else {
      this.filteredProjects = this.projects.filter(
        (project) => project.category === category
      );
    }
    this.activeCategory = category;
    this.visibleProjects = 6;
  }

  showCategory(category: string): void {
    this.renderProjects(category);
  }

  loadMoreProjects(): void {
    this.visibleProjects += 6;
  }

  openPopup(project: Project): void {
    this.selectedImages = project.images;
    this.isModalVisible = true;
  }

  closeModal(): void {
    this.isModalVisible = false;
    this.selectedImages = [];
  }
}
