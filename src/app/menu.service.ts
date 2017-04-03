import { Injectable } from '@angular/core';
import { MenuItem } from './models/menu_item';

@Injectable()
export class MenuService {

  getMenuItems(): MenuItem[] {
    return [
      {
        icon: "dashboard",
        title: "Dashboard",
        bottom: false,
        color: '#FFF',
        href: 'dashboard'
      },
      {
        icon: "receipt",
        title: "News",
        bottom: false,
        color: '#FFF',
        href: 'news'
      },
      {
        icon: "live_tv",
        title: "Serie TV",
        bottom: false,
        color: '#FFF',
        href: 'tv_series'
      },
      {
        icon: "tv",
        title: "Show televisivi",
        bottom: false,
        color: '#FFF',
        href: 'tv_shows'
      },
      {
        icon: "theaters",
        title: "Film",
        bottom: false,
        color: '#FFF',
        href: 'films'
      },
      {
        icon: "add",
        title: "Aggiungi un canale",
        bottom: false,
        color: '#FFF',
        href: 'add_channel'
      },
      {
        icon: "extension",
        title: "Estensioni",
        bottom: true,
        color: '#FFF',
        href: 'extensions'
      }
    ];
  }

}
