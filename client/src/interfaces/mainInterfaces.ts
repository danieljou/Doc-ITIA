/** @format */

export interface Succursale {
	id: number;
	nom: string;
	adresse: string;
	responsable: string;
	email: string;
	telephone: string;
	code_postal: string;
}

export interface Client {
	id: number;
	nom: string;
	prenom: string;
	adresse: string;
	code_postal: string;
	ville: string;
	pays: string;
	telephone: string;
	email: string;
	succursale: number;
}

export interface Assurance {
	id: number;
	nom: string;
	description: string;
	client: number;
	date_debut: string;
	date_fin: string;
	prime: number;
	statut: string;
}

/** @format */

export interface LoginInformations {
	username: string;
	password: string;
}

export interface UserSateAndAuthResponse {
	token: Token;
	msg: string;
}

export interface Token {
	refresh: string;
	access: string;
	user: User;
}

export interface User {
	id: string;
	last_login: string;
	is_superuser: boolean;
	username: string;
	is_staff: boolean;
	is_active: boolean;
	date_joined: string;
	last_name: string;
	first_name: unknown;
	email: string;
	picture: unknown;
	is_parrain: boolean;
	school_level: unknown;
	enterprise: unknown;
	groups: unknown[];
	user_permissions: unknown[];
}
