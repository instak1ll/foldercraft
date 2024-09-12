import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

// Función para crear carpetas y archivos desde el JSON
function createStructureFromTemplate(template: any, rootPath: string) {
	const folders = template.folders || [];
	const files = template.files || [];

	// Crear carpetas
	folders.forEach((folder: string) => {
		const folderPath = path.join(rootPath, folder);
		if (!fs.existsSync(folderPath)) {
			fs.mkdirSync(folderPath, { recursive: true });
		}
	});

	// Crear archivos
	files.forEach((file: { path: string; content: string }) => {
		const filePath = path.join(rootPath, file.path);
		if (!fs.existsSync(filePath)) {
			fs.writeFileSync(filePath, file.content || '');
		}
	});
}

// Activar la extensión
export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('extension.createStructure', async () => {
		const fileUri = await vscode.window.showOpenDialog({
			canSelectMany: false,
			openLabel: 'Select JSON Template',
			filters: { 'JSON files': ['json'] }
		});

		if (fileUri && fileUri[0]) {
			const filePath = fileUri[0].fsPath;
			const rootPath = vscode.workspace.rootPath;

			if (rootPath) {
				// Leer el archivo JSON
				const templateContent = fs.readFileSync(filePath, 'utf-8');
				const template = JSON.parse(templateContent);

				// Crear la estructura
				createStructureFromTemplate(template.templates.project, rootPath);
				vscode.window.showInformationMessage('Project structure created successfully!');
			} else {
				vscode.window.showErrorMessage('Please open a workspace folder first.');
			}
		}
	});

	context.subscriptions.push(disposable);
}

// Desactivar la extensión
export function deactivate() {}
