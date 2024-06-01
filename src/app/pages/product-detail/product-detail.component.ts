import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  images: string[] = [
    'https://picsum.photos/500/300?random=1',
    'https://picsum.photos/500/300?random=2',
    'https://picsum.photos/500/300?random=3',
    'https://picsum.photos/500/300?random=4',
    'https://picsum.photos/500/300?random=5'
  ];
  selectedImage: string;
  soldCount: number = 50;
  price: number = 1500;
  productOptions = [
    { name: 'Option 1', stock: 10 },
    { name: 'Option 2', stock: 0 },  // Sold out
    { name: 'Option 3', stock: 5 }
  ];
  selectedOption = this.productOptions[0];
  isLoggedIn: boolean = false; // This should be dynamically checked
  description: string = '商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述';
  selectedLanguage = 'zh-TW';
  searchQuery: string = '';
  quantity: number = 1;

  constructor(private router: Router, private translate: TranslateService) {
    this.selectedImage = this.images[0];
    this.translate.setDefaultLang(this.selectedLanguage);
    this.translate.use(this.selectedLanguage);
  }

  ngOnInit(): void {
  }

  selectImage(img: string) {
    this.selectedImage = img;
  }

  selectOption(option: any) {
    this.selectedOption = option;
  }

  addToCart() {
    if (!this.isLoggedIn) {
      // Navigate to login page
      console.log('Navigate to login');
    } else {
      // API call to add to cart
      console.log('Added to cart');
    }
  }

  checkAvailability() {
    // Check if selected option is available
    console.log('Selected option:', this.selectedOption);
  }

  changeLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.translate.use(lang);
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
