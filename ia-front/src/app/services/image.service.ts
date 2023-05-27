import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import environment from '../env/environment';
import { Observable } from 'rxjs';
import { RNNResponse } from '../models/rnn-response';

@Injectable({
	providedIn: 'root'
})
export class ImageService {
	constructor(private http: HttpClient) {}

	public postImage(body: File): Observable<RNNResponse> {
		return this.http.post<RNNResponse>(environment.api, body);
	}
}
