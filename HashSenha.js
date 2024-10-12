// criptografia.js
import { createHash } from 'crypto';

// Função para criptografar a senha usando SHA-256
export function encryptPassword(password) {
    return createHash('sha256').update(password).digest('hex');
}

