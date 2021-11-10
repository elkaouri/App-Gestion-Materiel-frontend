import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient: HttpClient) { }



  getMateriels() {
    return this.httpclient.get('http://localhost:8000/api/materiels/');
  }
  getMaterielsByVDP(data: any) {
    return this.httpclient.get('http://localhost:8000/api/materiels/' + data);
  }
  getMaterielsInvoice(data: any) {
    return this.httpclient.post('http://localhost:8000/api/getMaterielsInvoice/', data);
  }

  insertMateriel(data: any) {
    return this.httpclient.post('http://localhost:8000/api/insertMateriel', data);
  }

  deleteMateriels(id: any) {
    return this.httpclient.delete('http://localhost:8000/api/deleteMateriels/' + id);
  }
  getMateriel(id: any) {
    return this.httpclient.get('http://localhost:8000/api/materiel/' + id);
  }

  editMateriel(data: any) {
    return this.httpclient.post('http://localhost:8000/api/editMateriel/', data);
  }


  login(data: any) {
    return this.httpclient.post('http://localhost:8000/api/login', data);
  }

  insertUser(data: any) {
    return this.httpclient.post('http://localhost:8000/api/insertUser', data);
  }

  updateuser(data: any) {
    return this.httpclient.post('http://localhost:8000/api/updateuser', data);
  }

  getusers() {
    return this.httpclient.get('http://localhost:8000/api/getusers/');
  }

  deleteusers(id: any) {
    return this.httpclient.delete('http://localhost:8000/api/deleteusers/' + id);
  }




  insertType(data: any) {
    return this.httpclient.post('http://localhost:8000/api/insertType', data);
  }


  gettypes() {
    return this.httpclient.get('http://localhost:8000/api/gettypes/');
  }
  home() {
    return this.httpclient.get('http://localhost:8000/api/statistique/');
  }
  gettypesforselect() {
    return this.httpclient.get('http://localhost:8000/api/gettypesforselect/');
  }
  getSoustypes(type:any) {
    return this.httpclient.get('http://localhost:8000/api/getSoustypes/'+type);
  }

  deletetype(id: any) {
    return this.httpclient.delete('http://localhost:8000/api/deletetype/' + id);
  }
}
